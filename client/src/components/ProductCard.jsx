import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css"; 

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/product/${product._id}`);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <p className="product-description">{product.description}</p>
            <p className={`product-stock ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}>
                {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
            </p>
            <button className="view-details-btn" onClick={handleViewDetails} disabled={product.stock === 0}>
                {product.stock > 0 ? "View Details" : "Sold Out"}
            </button>
        </div>
    );
};

export default ProductCard;
