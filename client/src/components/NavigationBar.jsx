import React from "react";
import "./NavigationBar.css"; // Import CSS for styling

const NavigationBar = ({ setCategory }) => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <button onClick={() => setCategory("Flower")}>Flowers</button>
                </li>
                <li>
                    <button onClick={() => setCategory("Fruit")}>Fruits</button>
                </li>
                <li>
                    <button onClick={() => setCategory("Vegetable")}>Vegetables</button>
                </li>
                <li>
                    <button onClick={() => setCategory("Accessories")}>Accessories</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
