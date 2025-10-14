import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartLogo } from "./ImageGallery";

function Nav() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const authStatus = localStorage.getItem("isAuthenticated") === "true";
        const userRole = localStorage.getItem("role");
        setIsAuthenticated(authStatus);
        setRole(userRole);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("role");
        setIsAuthenticated(false);
        navigate("/");
        window.location.reload();
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">GreenHaven</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Categoriespage">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                            {/* Show AddProduct only if admin is logged in */}
                            {/* {isAuthenticated && role === "admin" && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/AddProduct">Add Product</Link>
                                </li>
                            )} */}
                            {isAuthenticated && role === "admin" && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/AdminDashboard">Admin Dashboard</Link>
                                </li>
                            )}
                        </ul>
                        <form className="d-flex">
                            {isAuthenticated ? (
                                <button className="btn" onClick={handleLogout}>
                                    Logout
                                </button>
                            ) : (
                                <button className="btn">
                                    <Link to="/Login" className="login-btn">Login</Link>
                                </button>
                            )}
                            <Link to="/Cartpage" className="cart-btn">
                                <img src={CartLogo} alt="Cart" className="cart-icon" />
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
