import React from "react";
import "./About.css";
import { Abflower, Abfruit, Abveg } from "./ImageGallery";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function About() {
    const categories = [
        {
            image: Abflower,
            alt: "Flowers",
            name: "Flowers",
            description: "Add a splash of color and fragrance to your surroundings.",
        },
        {
            image: Abfruit,
            alt: "Fruits",
            name: "Fruits",
            description: "Grow your own delicious and healthy fruits.",
        },
        {
            image: Abveg,
            alt: "Vegetables",
            name: "Vegetables",
            description: "Enjoy the freshness of homegrown vegetables.",
        },
    ];

    return (
        <>
            <div className="about-page">
                <div className="hero-section">
                    <h1 className="title">Welcome to Green Heaven</h1>
                    <p className="subtitle">
                        Your one-stop online destination for all your plant needs.
                    </p>
                    <p className="tagline">"Grow your world, one plant at a time."</p>
                </div>
                <div className="content-section">
                    <h2>About Us</h2>
                    <p>
                        At Green Heaven, we are passionate about bringing the beauty and
                        benefits of plants into your life. Whether you're a gardening
                        enthusiast or just starting your green journey, we have something for
                        everyone.
                    </p>
                    <p>
                        Our collection is carefully curated to include a diverse range of
                        plants, ensuring you find the perfect addition to your home, garden,
                        or workspace. Explore our three main categories:
                    </p>
                    <div className="categories">
                        {categories.map((category, index) => (
                            <div className="flip-card" key={index}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                            src={category.image}
                                            alt={category.alt}
                                            className="category-image"
                                        />
                                    </div>
                                    <div className="flip-card-back">
                                        <strong>{category.name}</strong>
                                        <p>{category.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to make plant ownership accessible and enjoyable for
                        everyone. We strive to provide high-quality plants, expert advice,
                        and excellent customer service to help you create your own green
                        heaven.
                    </p>
                    <blockquote className="inspirational-quote">
                        "Plants bring life, joy, and harmony to every space they inhabit."
                    </blockquote>
                </div>
                <div className="cta-section">
                    <h2>Join Us in Growing a Greener World</h2>
                    <p>
                        Whether you're looking to start a new hobby or expand your existing
                        plant collection, Green Heaven is here to support you every step of
                        the way.
                    </p>
                    <button className="shop-now-button"><Link to="/CategoriesPage"> Shop Now </Link></button>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default About;
