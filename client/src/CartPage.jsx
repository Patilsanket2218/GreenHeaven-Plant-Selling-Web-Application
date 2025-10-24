import React, { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import './CartPage.css';

const stripePromise = loadStripe("pk_test_51QhsHkBBd5siMmWjSMMmoMtf4qjnwCaSX5UptIIs1hWS5ErPsSnnQEODKKoluTVF1fgYTQpyGZjtvNKkRCNDPSUW00VH0uNXHq");

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryAddress, setDeliveryAddress] = useState({
        fullName: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
    });
    const [paymentMethod, setPaymentMethod] = useState("card");
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (!userId) {
            navigate("/login");
            return;
        }
        fetchCart();
    }, [userId]);

    const fetchCart = async () => {
        try {
            const response = await axios.get(`https://green-heaven-plant-selling-web-appl.vercel.app/api/cart/${userId}`);
            const products = response.data.products || [];
            setCartItems(products);
            calculateTotal(products);
        } catch (error) {
            console.error("Error fetching cart:", error);
            setCartItems([]);
        }
    };

    const calculateTotal = (items) => {
        const total = items.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const removeFromCart = async (productId) => {
        try {
            await axios.delete(`https://green-heaven-plant-selling-web-appl.vercel.app/api/cart/${userId}/${productId}`);
            fetchCart();
        } catch (error) {
            console.error("Error removing product:", error);
        }
    };

    const updateQuantity = async (productId, quantity) => {
        const item = cartItems.find((item) => item.productId._id === productId);
        if (item && quantity > item.productId.stock) {
            alert(`Only ${item.productId.stock} items are available in stock.`);
            return;
        }
    
        try {
            await axios.put(`https://green-heaven-plant-selling-web-appl.vercel.app/api/cart/${userId}`, {
                productId,
                quantity,
            });
            fetchCart();
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    };

    const handleCheckout = async () => {
        const requiredFields = ["fullName", "phone", "street", "city", "state", "zipCode", "country"];
        const isAddressValid = requiredFields.every((field) => deliveryAddress[field].trim() !== "");

        if (!isAddressValid) {
            alert("Please fill out all delivery address fields.");
            return;
        }

        try {
            const response = await axios.post("https://green-heaven-plant-selling-web-appl.vercel.app/api/cart/checkout", {
                userId,
                deliveryAddress,
                paymentMethod,
            });

            const stripe = await stripePromise;
            window.location.href = response.data.sessionUrl;
        } catch (error) {
            console.error("Checkout error:", error);
        }
    };

    return (
        <div className="cart-container">
            <h2 className="cart-header">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.productId._id} className="cart-item">
                            <img src={item.productId.image} alt={item.productId.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 className="cart-item-name">{item.productId.name}</h3>
                                <p className="cart-item-price">Price: ${item.productId.price}</p>
                                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.productId._id, e.target.value)}
                                    className="cart-item-quantity-input"
                                />
                                <button onClick={() => removeFromCart(item.productId._id)} className="cart-item-remove-button">Remove</button>
                            </div>
                        </div>
                    ))}
                    <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>

                    <div className="delivery-address-section">
                        <h3>Delivery Address</h3>
                        <form className="delivery-address-form">
                            <label>Full Name:</label>
                            <input
                                type="text"
                                value={deliveryAddress.fullName}
                                onChange={(e) => setDeliveryAddress({ ...deliveryAddress, fullName: e.target.value })}
                            />
                            <label>Phone:</label>
                            <input
                                type="tel"
                                value={deliveryAddress.phone}
                                maxLength={10}
                                onChange={(e) => setDeliveryAddress({ ...deliveryAddress, phone: e.target.value })}
                            />
                            <label>Street:</label>
                            <input
                                type="text"
                                value={deliveryAddress.street}
                                onChange={(e) => setDeliveryAddress({ ...deliveryAddress, street: e.target.value })}
                            />
                            <label>City:</label>
                            <input
                                type="text"
                                value={deliveryAddress.city}
                                onChange={(e) => setDeliveryAddress({ ...deliveryAddress, city: e.target.value })}
                            />
                            <label>State:</label>
                            <input
                                type="text"
                                value={deliveryAddress.state}
                                onChange={(e) => setDeliveryAddress({ ...deliveryAddress, state: e.target.value })}
                            />
                            <label>Zip Code:</label>
                            <input
                                type="tel"
                                value={deliveryAddress.zipCode}
                                maxLength={6}
                                onChange={(e) => setDeliveryAddress({ ...deliveryAddress, zipCode: e.target.value })}
                            />
                            <label>Country:</label>
                            <input
                                type="text"
                                value={deliveryAddress.country}
                                onChange={(e) => setDeliveryAddress({ ...deliveryAddress, country: e.target.value })}
                            />
                        </form>
                    </div>

                    <div className="payment-method-section">
                        <h3>Payment Method</h3>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="payment-method-select">
                            <option value="card">Credit Card</option>
                            <option value="gpay">Google Pay</option>
                        </select>
                    </div>

                    <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;