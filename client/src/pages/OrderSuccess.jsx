import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Successful!</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Thank you for your purchase. Your order has been placed successfully.
                </p>
                <p className="text-gray-600">
                    A confirmation email with your receipt will be sent shortly.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 transition"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
