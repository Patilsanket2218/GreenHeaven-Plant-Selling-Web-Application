import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Admin credentials
  const ADMIN_EMAIL = "Sanketpatil@gmail.com";
  const ADMIN_PASSWORD = "Sanket@123";

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("https://green-heaven-plant-selling-web-appl.vercel.app/Login", {
        email,
        password,
      });

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem("role", "admin");
        localStorage.setItem("isAuthenticated", "true");
        navigate("/AdminDashboard");
        window.location.reload();
      } else if (response.data.status === "Success") {
        localStorage.setItem("role", "user");
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userId", response.data.userId); // Store user ID
        navigate("/");
        window.location.reload();
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="body">
      <div className="container login-container d-flex-center">
        <div className="col-lg-4 col-md-6 col-sm-8 login-box">
          <div className="text-center mb-4">
            <div className="logo">GreenHaven</div>
            <p>Sign in to your account</p>
          </div>

          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </span>
              </div>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn login-btn btn-lg text-white">
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <p>
              Don't have an account?{" "}
              <Link to="/Signup" className="text-decoration-none">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
