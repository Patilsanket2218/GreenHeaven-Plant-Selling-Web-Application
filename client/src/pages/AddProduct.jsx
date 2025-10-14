import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        category: "Flower",
        price: "",
        image: "",
        description: "",
    });

    const navigate = useNavigate();

    // Check if user is authenticated and is an admin
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
        const role = localStorage.getItem("role");

        if (!isAuthenticated || role !== "admin") {
            alert("Access Denied! Admins Only.");
            navigate("/Login");
        }
    }, [navigate]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/addProduct", product);
            alert("Product Added Successfully!");
            setProduct({ name: "", category: "Flower", price: "", image: "", description: "" });
        } catch (error) {
            alert("Error adding product");
        }
    };

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    className="border p-2 w-full"
                    required
                />
                <select
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    className="border p-2 w-full"
                >
                    <option value="Flower">Flower</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Accessories">Accessories</option>
                </select>
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="border p-2 w-full"
                    required
                />
                <input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="border p-2 w-full"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Product description"
                    className="border p-2 w-full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
