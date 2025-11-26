const express = require("express");
const router = express.Router();
const Cart = require("../models/CartModel");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Use environment variable
const { sendInvoiceEmail } = require("../utils/emailSender");

const YOUR_DOMAIN = "http://localhost:5173";

// **Add product to cart**
router.post("/", async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) cart = new Cart({ userId, products: [] });

        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
        if (productIndex > -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ productId, quantity });
        }

        await cart.save();
        res.status(200).json({ message: "Product added to cart", cart });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// **Get cart items**
router.get("/:userId", async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId }).populate("products.productId");
        if (!cart) return res.status(404).json({ message: "Cart not found" });
        res.status(200).json(cart);
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// **Remove product from cart**
router.delete("/:userId/:productId", async (req, res) => {
    try {
        const { userId, productId } = req.params;
        let cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.products = cart.products.filter(p => p.productId.toString() !== productId);
        await cart.save();

        res.status(200).json({ message: "Product removed from cart", cart });
    } catch (error) {
        console.error("Error removing from cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// **Update product quantity**
router.put("/:userId", async (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
        if (productIndex > -1) {
            cart.products[productIndex].quantity = quantity;
            await cart.save();
            res.status(200).json({ message: "Cart updated", cart });
        } else {
            res.status(404).json({ message: "Product not found in cart" });
        }
    } catch (error) {
        console.error("Error updating cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/checkout", async (req, res) => {
    const { userId, deliveryAddress, paymentMethod } = req.body;

    if (!userId || !deliveryAddress || !paymentMethod) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const requiredAddressFields = ["fullName", "phone", "street", "city", "state", "zipCode", "country"];
    if (!requiredAddressFields.every(field => deliveryAddress[field])) {
        return res.status(400).json({ message: "Invalid delivery address" });
    }

    try {
        const cart = await Cart.findOne({ userId }).populate("products.productId");
        if (!cart || cart.products.length === 0) {
            return res.status(400).json({ message: "Cart is empty!" });
        }

        let totalPrice = cart.products.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: cart.products.map((item) => ({
                price_data: {
                    currency: "usd",
                    product_data: { name: item.productId.name, images: [item.productId.image] },
                    unit_amount: Math.round(item.productId.price * 100),
                },
                quantity: item.quantity,
            })),
            mode: "payment",
            success_url: `${YOUR_DOMAIN}/order-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${YOUR_DOMAIN}/cart`,
        });

        const newOrder = new Order({
            userId,
            cartItems: cart.products.map((item) => ({
                productId: item.productId._id,
                quantity: item.quantity,
            })),
            totalPrice,
            deliveryAddress,
            paymentStatus: "Success",
            paymentInfo: { paymentMethod, paymentId: session.id, transactionStatus: "Processing" },
        });

        await newOrder.save();

        // Reduce stock quantity for each product in the cart
        for (const item of cart.products) {
            const product = await Product.findById(item.productId._id);
            if (product) {
                product.stock -= item.quantity;
                await product.save();
            }
        }

        // Clear user's cart after order is placed
        await Cart.findOneAndDelete({ userId });

        res.status(200).json({ message: "Checkout initiated", sessionUrl: session.url });
    } catch (error) {
        console.error("Checkout error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// **Handle successful checkout**
router.post("/checkout/success", async (req, res) => {
    const { sessionId, userId } = req.body;

    if (!sessionId || !userId) {
        return res.status(400).json({ message: "Missing sessionId or userId" });
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (!session || session.payment_status !== "paid") {
            return res.status(400).json({ message: "Payment not successful" });
        }

        const order = await Order.findOneAndUpdate(
            { "paymentInfo.paymentId": sessionId },
            { paymentStatus: "Completed", "paymentInfo.transactionStatus": "Success" },
            { new: true }
        ).populate("cartItems.productId");

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        for (const item of order.cartItems) {
            const product = await Product.findById(item.productId);
            if (product) {
                product.stock -= item.quantity;
                await product.save();
            }
        }

        const user = await User.findById(userId);
        if (user) {
            await sendInvoiceEmail({ email: session.customer_email, name: user.name }, order, order.cartItems);
        }

        await Cart.findOneAndDelete({ userId });

        return res.status(200).json({ message: "Payment successful, order placed, and invoice sent!", order });
    } catch (error) {
        console.error("Checkout success error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
