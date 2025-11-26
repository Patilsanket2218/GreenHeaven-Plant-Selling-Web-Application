const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cartItems: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
  deliveryAddress: {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentStatus: { type: String, default: "Pending" },
  paymentInfo: {
    paymentMethod: { type: String, required: true }, // e.g., 'Credit Card', 'GPay'
    paymentId: { type: String, required: true }, // Stripe payment ID
    transactionStatus: { type: String, default: "Processing" }, // 'Success', 'Failed', etc.
  },
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
