import "./Contact.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Contact() {
    const [name1, setName1] = useState("");
    const [email1, setEmail1] = useState("");
    const [mobile, setMobile] = useState(""); // New mobile state
    const [message1, setMessage1] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [loginPopup, setLoginPopup] = useState(false);
    const [openIndex, setOpenIndex] = useState(null); // FAQ Accordion state

    const navigate = useNavigate();

    const handleSubmit1 = (e) => {
        e.preventDefault();

        const isAuthenticated = localStorage.getItem("isAuthenticated");

        if (!isAuthenticated || isAuthenticated !== "true") {
            setLoginPopup(true);
            return;
        }

        axios.post("http://localhost:3001/Contact", { name1, email1, mobile, message1 }) // Sending mobile to backend
            .then(() => {
                setShowPopup(true);
            })
            .catch((err) => console.log(err));
    };

    const faqData = [
        { question: "How can I place an order?", answer: "You can place an order by selecting your favorite plants, adding them to the cart, and proceeding to checkout." },
        { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and UPI payments." },
        { question: "How long does delivery take?", answer: "Delivery usually takes 3-7 business days depending on your location." },
        { question: "Do you offer plant care tips?", answer: "Yes, we provide plant care tips with every purchase and on our website's blog section." },
        { question: "How do I contact customer support?", answer: "You can reach us via email at support@greenheaven.com or call us at +123 456 7890." },
    ];

    return (
        <>
            <div className="contact-page">
                <header className="contact-header">
                    <h1 className="contact-title">Get in Touch with Green Heaven</h1>
                    <p className="contact-subtitle">
                        We’d love to hear from you! Whether you have questions, suggestions, or just want to say hi, feel free to reach out.
                    </p>
                </header>
                <div className="contact-content">
                    <div className="contact-form-section">
                        <h2>Contact Form</h2>
                        <form className="contact-form" onSubmit={handleSubmit1}>
                            <label htmlFor="name"> Full Name</label>
                            <input type="text" id="name" name="name" minLength={10} maxLength={20} placeholder="Your Full Name" required onChange={(e) => setName1(e.target.value)} />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required onChange={(e) => setEmail1(e.target.value)} />

                            {/* New Mobile Number Field */}
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="tel" id="mobile" name="mobile" maxLength={10} placeholder="Your Mobile Number" required onChange={(e) => setMobile(e.target.value)} />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" rows="5" required onChange={(e) => setMessage1(e.target.value)}></textarea>

                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>

                    {/* FAQ Section */}
                    <div className="faq-section" id="faq-section" >
                        <h2>Frequently Asked Questions (FAQ)</h2>
                        {faqData.map((item, index) => (
                            <div key={index} className="faq-item">
                                <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                    {item.question}
                                </button>
                                {openIndex === index && <p className="faq-answer">{item.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Success Popup */}
                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully.</p>
                            <button onClick={() => {
                                setShowPopup(false);
                                navigate("/Contact");
                            }}>OK</button>
                        </div>
                    </div>
                )}

                {/* Login Required Popup */}
                {loginPopup && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                            <h3>Login Required</h3>
                            <p>You must be logged in to submit the form.</p>
                            <button onClick={() => {
                                setLoginPopup(false);
                                navigate("/Login");
                            }}>Login Now</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Contact;
