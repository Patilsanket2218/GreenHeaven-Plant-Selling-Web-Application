import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                {/* Plant Categories Section */}
                <div className="footer-section">
                    <h2>Plant Categories</h2>
                    <ul>
                        <li><Link to="#flower">Flowers</Link></li>
                        <li><Link to="#fruits">Fruits</Link></li>
                        <li><Link to="#vegetables">Vegetables</Link></li>
                    </ul>
                </div>

                {/* Soil Information Section */}
                <div className="footer-section">
                    <h2>Soil Information</h2>
                    <p>Discover the best soil types for different plants.</p>
                    <Link to="#Soil" className="read-more">Read More</Link>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/About">About Us</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/Categories">Categories</Link></li>
                    </ul>
                </div>

                {/* Store Locations Section */}
                <div className="footer-section">
                    <h2>Store Locations</h2>
                    <p><strong>New York:</strong> 123 Green St, NY</p>
                    <p><strong>Los Angeles:</strong> 456 Plant Ave, LA</p>
                    <p><strong>Chicago:</strong> 789 Garden Rd, CH</p>
                </div>

                {/* Contact & Social Media Section */}
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>Email: support@greenheaven.com</p>
                    <p>Phone: +123 456 7890</p>
                    <div className="social-icons">
                        <Link to="https://facebook.com"><FaFacebook /></Link>
                        <Link to="https://instagram.com"><FaInstagram /></Link>
                        <Link to="https://twitter.com"><FaTwitter /></Link>
                        <Link to="https://linkedin.com"><FaLinkedin /></Link>
                        <Link to="https://youtube.com"><FaYoutube /></Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                &copy; 2025 GreenHeaven. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
