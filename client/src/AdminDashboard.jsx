import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "./api/productService";
import "./AdminDashboard.css";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function AdminDashboard() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("registers");
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "Flower",
        price: "",
        stock: "",
        image: "",
        description: ""
    });
    const [editingProduct, setEditingProduct] = useState(null);
    const [users, setUsers] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [userGraphData, setUserGraphData] = useState([]);
    const [orders, setOrders] = useState([]);
    const [ordersGraphData, setOrdersGraphData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "admin") {
            navigate("/");
        }
        fetchProducts().then(setProducts);
    }, [navigate]);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        await addProduct(newProduct);
        fetchProducts().then(setProducts);
        setNewProduct({ name: "", category: "Flower", price: "", stock: "", image: "", description: "" });
    };

    const handleEditProduct = async (e) => {
        e.preventDefault();
        if (editingProduct) {
            await updateProduct(editingProduct._id, editingProduct);
            fetchProducts().then(setProducts);
            setEditingProduct(null);
        }
    };

    const handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        fetchProducts().then(setProducts);
    };

    // Fetch users and generate graph data
    useEffect(() => {
        axios.get("http://localhost:3001/getUsers")
            .then(response => {
                setUsers(response.data);
                generateGraphData(response.data);
            })
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    const generateGraphData = (userData) => {
        const groupedByDate = {};
        userData.forEach(user => {
            const date = new Date(user.createdAt).toLocaleDateString();
            groupedByDate[date] = (groupedByDate[date] || 0) + 1;
        });

        const graphData = Object.keys(groupedByDate).map(date => ({
            date,
            users: groupedByDate[date],
        }));

        setUserGraphData(graphData);
    };

    // Fetch contacts
    useEffect(() => {
        axios.get("http://localhost:3001/getContacts")
            .then(response => {
                setContacts(response.data);
            })
            .catch(error => console.error("Error fetching contacts:", error));
    }, []);

    // Fetch orders and generate orders graph data
    useEffect(() => {
        axios.get("http://localhost:3001/getOrders")  // Assuming you have this endpoint to fetch orders
            .then(response => {
                setOrders(response.data);
                generateOrdersGraphData(response.data);
            })
            .catch(error => console.error("Error fetching orders:", error));
    }, []);

    const generateOrdersGraphData = (ordersData) => {
        const groupedByDate = {};
        ordersData.forEach(order => {
            const date = new Date(order.createdAt).toLocaleDateString();
            const totalPrice = order.totalPrice;

            if (!groupedByDate[date]) {
                groupedByDate[date] = { orders: 0, totalPrice: 0 };
            }
            groupedByDate[date].orders += 1;
            groupedByDate[date].totalPrice += totalPrice;
        });

        const graphData = Object.keys(groupedByDate).map(date => ({
            date,
            orders: groupedByDate[date].orders,
            totalPrice: groupedByDate[date].totalPrice,
        }));

        setOrdersGraphData(graphData);
    };

    const renderContent = () => {
        switch (selectedOption) {
            case "registers":
                return (
                    <div className="registered-users-container">
                        <h2>Registered Users</h2>
                        <div className="table-wrapper">
                            <table className="registered-users-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Registered Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Graph Section */}
                        <h2>User Registration Graph</h2>
                        <div className="graph-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={userGraphData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="users" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                );
            case "products":
                return (
                    <div className="admin-panel-section">
                        <h3 className="admin-panel-section-title">Manage Products</h3>
                        <form onSubmit={editingProduct ? handleEditProduct : handleAddProduct} className="admin-product-management">
                            <input type="text" name="name" className="product-input" minLength={1} maxLength={20} value={editingProduct ? editingProduct.name : newProduct.name}
                                onChange={(e) => editingProduct ?
                                    setEditingProduct({ ...editingProduct, name: e.target.value }) :
                                    setNewProduct({ ...newProduct, name: e.target.value })}
                                placeholder="Product Name" required />

                            <select name="category" className="product-input" value={editingProduct ? editingProduct.category : newProduct.category}
                                onChange={(e) => editingProduct ?
                                    setEditingProduct({ ...editingProduct, category: e.target.value }) :
                                    setNewProduct({ ...newProduct, category: e.target.value })}>
                                <option value="Flower">Flower</option>
                                <option value="Fruit">Fruit</option>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Accessories">Accessories</option>
                            </select>

                            <input type="number" className="product-input" name="price" min={1} max={1000} value={editingProduct ? editingProduct.price : newProduct.price}
                                onChange={(e) => editingProduct ?
                                    setEditingProduct({ ...editingProduct, price: e.target.value }) :
                                    setNewProduct({ ...newProduct, price: e.target.value })}
                                placeholder="Price" required />

                            <input type="number" className="product-input" name="stock" min={1} max={1000} value={editingProduct ? editingProduct.stock : newProduct.stock}
                                onChange={(e) => editingProduct ?
                                    setEditingProduct({ ...editingProduct, stock: e.target.value }) :
                                    setNewProduct({ ...newProduct, stock: e.target.value })}
                                placeholder="Stock Quantity" required />

                            <input type="url" className="product-input" name="image" value={editingProduct ? editingProduct.image : newProduct.image}
                                onChange={(e) => editingProduct ?
                                    setEditingProduct({ ...editingProduct, image: e.target.value }) :
                                    setNewProduct({ ...newProduct, image: e.target.value })}
                                placeholder="Image URL" required />

                            <input type="text" className="product-input" name="description" value={editingProduct ? editingProduct.description : newProduct.description}
                                onChange={(e) => editingProduct ?
                                    setEditingProduct({ ...editingProduct, description: e.target.value }) :
                                    setNewProduct({ ...newProduct, description: e.target.value })}
                                placeholder="Description" required />

                            <button type="submit" className="admin-panel-nav-btn">
                                {editingProduct ? "Update Product" : "Add Product"}
                            </button>
                        </form>

                        <h4 className="admin-panel-section-title">Existing Products</h4>
                        <ul className="admin-product-list">
                            {products.map((product) => (
                                <li key={product._id} className="admin-product-card">
                                    <img src={product.image} alt={product.name} />
                                    <div className="admin-product-info">
                                        {product.name} - ₹{product.price} - Stock: {product.stock}
                                    </div>
                                    <div className="admin-product-actions">
                                        <button onClick={() => setEditingProduct(product)} className="admin-edit-btn">Edit</button>
                                        <button onClick={() => handleDeleteProduct(product._id)} className="admin-delete-btn">Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "orders":
                return (
                    <div className="admin-dashboard">
                        <h2 className="dashboard-title">Admin Dashboard - Orders</h2>
                        <table className="orders-table">
                            <thead>
                                <tr>
                                    {/* <th className="table-header">Product Names</th> */}
                                    <th className="table-header">Product Quantities</th>
                                    <th className="table-header">Total Price</th>
                                    <th className="table-header">Payment Status</th>
                                    <th className="table-header">Delivery Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order._id} className="order-row">
                                        {/* <td className="product-names">
                                            {order.cartItems
                                                ?.map((item) => item.productId?.name) // Get name from populated product
                                                .filter((name) => name) // Exclude undefined names
                                                .join(", ")}
                                        </td> */}
                                        <td className="product-quantities">
                                            {order.cartItems?.map((item) => item.quantity || 0).join(", ")}
                                        </td>
                                        <td className="total-price">₹{order.totalPrice}</td>
                                        <td className="payment-status">{order.paymentStatus}</td>
                                        <td className="delivery-address">
                                            {order.deliveryAddress
                                                ? `${order.deliveryAddress.street}, ${order.deliveryAddress.city}, ${order.deliveryAddress.state}, ${order.deliveryAddress.zipCode}, ${order.deliveryAddress.country}`
                                                : "No Address Provided"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Orders Graph Section */}
                        <h2>Orders Graph</h2>
                        <div className="graph-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={ordersGraphData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
                                    {/* Removed the totalPrice line */}
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                );
            case "contact":
                return (
                    <div className="contact-messages-container">
                        <h2>Contact Messages</h2>
                        <table className="contact-messages-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile No</th>
                                    <th>Date</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(contact => (
                                    <tr key={contact._id}>
                                        <td>{contact.name1}</td>
                                        <td>{contact.email1}</td>
                                        <td>{contact.mobile}</td>
                                        <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                                        <td>{contact.message1}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case "report":
                const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);
                const totalOrders = orders.length;

                const productSales = {};
                orders.forEach(order => {
                    order.cartItems.forEach(item => {
                        if (!productSales[item.category]) {
                            productSales[item.category] = { quantity: 0, revenue: 0 };
                        }
                        productSales[item.category].quantity += item.quantity;
                        productSales[item.category].revenue += item.quantity * item.price;
                    });
                });

                // Group orders by day, week, or month
                const groupOrdersByPeriod = (orders, period) => {
                    const groupedByPeriod = {};
                    orders.forEach(order => {
                        let periodKey;
                        const date = new Date(order.createdAt);

                        if (period === 'daily') {
                            periodKey = date.toLocaleDateString();
                        } else if (period === 'weekly') {
                            const startOfWeek = new Date(date.setDate(date.getDate() - date.getDay())); // Get the start of the week (Sunday)
                            periodKey = startOfWeek.toLocaleDateString();
                        } else if (period === 'monthly') {
                            periodKey = `${date.getMonth() + 1}-${date.getFullYear()}`;
                        }

                        if (!groupedByPeriod[periodKey]) {
                            groupedByPeriod[periodKey] = { orders: 0, totalPrice: 0 };
                        }
                        groupedByPeriod[periodKey].orders += 1;
                        groupedByPeriod[periodKey].totalPrice += order.totalPrice;
                    });

                    return Object.keys(groupedByPeriod).map(periodKey => ({
                        period: periodKey,
                        orders: groupedByPeriod[periodKey].orders,
                        totalPrice: groupedByPeriod[periodKey].totalPrice
                    }));
                };

                const ordersGraphDataDaily = groupOrdersByPeriod(orders, 'daily');
                const ordersGraphDataWeekly = groupOrdersByPeriod(orders, 'weekly');
                const ordersGraphDataMonthly = groupOrdersByPeriod(orders, 'monthly');

                return (
                    <div className="sales-report-section">
                        <h3 className="sales-report-title">Sales Report</h3>
                        <p className="sales-summary"><strong>Total Revenue:</strong> ₹{totalRevenue.toFixed(2)}</p>
                        <p className="sales-summary"><strong>Total Orders:</strong> {totalOrders}</p>

                        <h4 className="sales-subtitle">Sales Revenue Over Time (Daily)</h4>
                        <div className="sales-graph-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={ordersGraphDataDaily}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="period" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="totalPrice" stroke="#ff7300" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <h4 className="sales-subtitle">Sales Revenue Over Time (Weekly)</h4>
                        <div className="sales-graph-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={ordersGraphDataWeekly}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="period" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="totalPrice" stroke="#ff7300" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <h4 className="sales-subtitle">Sales Revenue Over Time (Monthly)</h4>
                        <div className="sales-graph-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={ordersGraphDataMonthly}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="period" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="totalPrice" stroke="#ff7300" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                );


            default:
                return (
                    <div className="admin-panel-section">
                        <h3 className="admin-panel-section-title">Welcome, Admin!</h3>
                        <p className="admin-panel-section-text">Select an option to manage the system.</p>
                    </div>
                );
        }
    };

    return (
        <div className="admin-panel-container">
            <h2 className="admin-panel-title">Welcome, Admin!</h2>
            <p className="admin-panel-description">Manage users, products, orders, and inquiries here.</p>

            <div className="admin-panel-navigation">
                <button onClick={() => setSelectedOption("registers")} className="admin-panel-nav-btn">Registers</button>
                <button onClick={() => setSelectedOption("products")} className="admin-panel-nav-btn">Manage Products</button>
                <button onClick={() => setSelectedOption("orders")} className="admin-panel-nav-btn">View Orders</button>
                <button onClick={() => setSelectedOption("contact")} className="admin-panel-nav-btn">Contact</button>
                <button onClick={() => setSelectedOption("report")} className="admin-panel-nav-btn">Sales Reports</button>
            </div>

            <div className="admin-panel-content">{renderContent()}</div>
        </div>
    );
}

export default AdminDashboard;
