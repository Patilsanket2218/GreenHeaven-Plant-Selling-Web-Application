const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    category: String, // Flower, Fruit, Vegetable, Accessories
    price: Number,
    stock: { type: Number, default: 0 }, // Added stock with a default value
    image: String,
    description: String,
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
