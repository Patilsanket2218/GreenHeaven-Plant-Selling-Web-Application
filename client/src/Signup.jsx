import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; // Optional CSS file for styling
import { use } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Toggle function for password visibility
    const togglePassword = (setter) => {
        setter((prevState) => !prevState);
    };

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Signup', { name, email, password})
            .then(result => {
                console.log(result)
                navigate('/Login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="body">
            <div className="container signup-container">
                <div className="signup-box">
                    <div className="text-center mb-4">
                        <div className="logo">GreenHaven</div>
                        <p>Create your account</p>
                    </div>
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    minLength={10}
                                    maxLength={20}
                                    placeholder="Enter full name"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>


                        <div className="col-md-6 mx-auto">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    id="password"
                                    minLength={8}
                                    maxLength={12}
                                    placeholder="Enter password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span
                                    className="input-group-text"
                                    id="togglePassword"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => togglePassword(setShowPassword)}
                                >
                                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </span>
                            </div>
                        </div>


                        <div className="col-12 d-grid gap-2">
                            <button type="submit" className="btn signup-btn btn-lg text-white">
                                Sign Up
                            </button>
                        </div>
                    </form>


                    <div className="text-center mt-3">
                        <p>
                            Already have an account?{" "}
                            <Link to="/login" className="text-decoration-none">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
