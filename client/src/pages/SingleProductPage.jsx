import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SingleProductPage.css"; // Import CSS file
import Nav from "../Nav";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));

    fetchReviews();
  }, [id]);

  const fetchReviews = () => {
    axios
      .get(`http://localhost:3001/api/reviews/${id}`)
      .then((response) => setReviews(response.data))
      .catch((error) => console.error("Error fetching reviews:", error));
  };

  const submitReview = () => {
    axios
      .post("http://localhost:3001/api/reviews", {
        productId: id,
        text: reviewText,
        rating,
      })
      .then(() => {
        setReviewText("");
        setRating(1);
        fetchReviews();
      })
      .catch((error) => console.error("Error submitting review:", error));
  };

  const handleBuyNow = () => {
    navigate(`/payment/${id}`);
  };

  const handleAddToCart = async () => {
    const userId = localStorage.getItem("userId") || null;

    if (!userId) {
      alert("Please log in to add items to the cart.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/api/cart", {
        userId,
        productId: id,
        quantity: 1,
      });

      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <>
      <Nav />
      <div className="single-product-container">
        {product && (
          <>
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="single-product-image"
              />
            </div>
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">₹{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              {/* <button className="buy-now-btn" onClick={handleBuyNow}>
                Buy Now
              </button> */}
            </div>
          </>
        )}

        <div className="review-section">
          <h3>Product Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review">
                <p>
                  <strong>Rating:</strong> {review.rating} ⭐
                </p>
                <p>
                  <strong>Review:</strong> {review.text}
                </p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}

          <div className="review-form">
            <h3>Write a Review</h3>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
              className="review-textarea"
            />
            <label>Rating: </label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="review-rating"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} ⭐
                </option>
              ))}
            </select>
            <button className="submit-review-btn" onClick={submitReview}>
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
