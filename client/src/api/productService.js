import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const addProduct = async (product) => {
    const response = await axios.post(`${API_URL}/addProduct`, product);
    return response.data;
};

export const updateProduct = async (id, updatedProduct) => {
    const response = await axios.put(`${API_URL}/updateProduct/${id}`, updatedProduct);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_URL}/deleteProduct/${id}`);
    return response.data;
};

export const fetchProducts2 = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
};

// Fetch reviews for a product
export const fetchReviews = async (productId) => {
    const response = await axios.get(`${API_URL}/reviews/${productId}`);
    return response.data;
};

// Submit a review
export const submitReview = async (reviewData) => {
    await axios.post(`${API_URL}/reviews`, reviewData);
};