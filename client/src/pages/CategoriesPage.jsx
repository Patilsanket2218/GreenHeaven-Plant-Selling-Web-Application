import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/productService";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/NavigationBar";
import "./CategoriesPage.css"; // Import CSS file
import Footer from "../Footer";

const CategoriesPage = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("Flower");

    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    const filteredProducts = products.filter((p) => p.category === category);

    return (
        <>
        <div className="categories-container">
            <Sidebar setCategory={setCategory} />
            <div className="products-container">
                <h1 className="title">{category} </h1>
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default CategoriesPage;
