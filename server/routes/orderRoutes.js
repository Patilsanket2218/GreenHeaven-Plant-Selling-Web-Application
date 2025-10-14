const express = require("express");
const { createOrder, getAllOrders , processOrder } = require("../controllers/orderController");

const router = express.Router();

// Route to process the order and send invoice
router.post("/placeOrder", processOrder);

// POST route to create a new order
router.post("/create", createOrder);

// GET route to fetch all orders
router.get("/", getAllOrders);

module.exports = router;
