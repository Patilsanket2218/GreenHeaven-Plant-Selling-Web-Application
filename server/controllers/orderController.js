const Order = require("../models/Order");
const Product = require("../models/Product");

// Process the order (including reducing stock)
const processOrder = async (req, res) => {
    try {
        const { userId, cartItems, totalPrice, deliveryAddress, paymentInfo } = req.body;

        // Reduce stock for each ordered product
        for (const item of cartItems) {
            const product = await Product.findById(item.productId);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            if (product.stock < item.quantity) {
                return res.status(400).json({ message: `Not enough stock for ${product.name}` });
            }

            // Reduce stock
            product.stock -= item.quantity;
            await product.save();
        }

        // Create a new order
        const newOrder = new Order({
            userId,
            cartItems,
            totalPrice,
            deliveryAddress,
            paymentStatus: "Paid",
            paymentInfo,
        });

        await newOrder.save();

        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        console.error("Order processing error:", error);
        res.status(500).json({ message: "Error processing order" });
    }
};

// Create a new order
const createOrder = async (req, res) => {
    try {
        const { userId, cartItems, totalPrice, deliveryAddress, paymentInfo } = req.body;

        const newOrder = new Order({
            userId,
            cartItems,
            totalPrice,
            deliveryAddress,
            paymentInfo,
        });

        const savedOrder = await newOrder.save();

        res.status(201).json({ success: true, order: savedOrder });
    } catch (err) {
        console.error("Error creating order:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// Fetch all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ success: true, orders });
    } catch (err) {
        console.error("Error fetching orders:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate({
                path: "cartItems.productId", // Assuming productId is stored in cartItems
                select: "name", // Fetch only the product name
            });

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
};

// Export the functions
module.exports = { createOrder, getAllOrders, processOrder, getOrders };
