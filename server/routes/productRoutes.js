const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
});

// Add a new product
router.post("/addProduct", async (req, res) => {
    try {
        const { name, category, price, stock, image, description } = req.body;

        // Validate stock (Ensure stock is not negative)
        if (stock < 0) {
            return res.status(400).json({ message: "Stock cannot be negative" });
        }

        const newProduct = new Product({
            name,
            category,
            price,
            stock,
            image,
            description
        });

        await newProduct.save();
        res.json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error });
    }
});

// Update a product
router.put("/updateProduct/:id", async (req, res) => {
    try {
        const { name, category, price, stock, image, description } = req.body;

        // Validate stock
        if (stock < 0) {
            return res.status(400).json({ message: "Stock cannot be negative" });
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, category, price, stock, image, description },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
});

// Delete a product
router.delete("/deleteProduct/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
});

module.exports = router;
