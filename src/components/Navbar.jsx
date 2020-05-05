import React from "react";
import "./Navbar.scss";
import hamburger from "../assets/hamburger.svg";

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <a href="#">
                    <h1>KA</h1>
                </a>
            </div>

            <div className="menu">
                <a href="mailto:kristian.nessa@protonmail.com">Contact</a>
                <a
                    href="https://github.com/kris10ansn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.buymeacoffee.com/klUfyKN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bmc"
                >
                    <img
                        src="https://cdn.buymeacoffee.com/buttons/default-white.png"
                        alt="Buy Me A Coffee"
                        className="bmc"
                    />
                </a>
            </div>

            <div className="hamburger">
                <img id="hamburger-button" src={hamburger} alt=":::" />
            </div>
        </nav>
    );
}
