import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

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
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>

                <a
                    href="https://www.buymeacoffee.com/klUfyKN"
                    target="_blank"
                    className="bmc"
                >
                    <img
                        src="https://cdn.buymeacoffee.com/buttons/default-white.png"
                        alt="Buy Me A Coffee"
                    />
                </a>
            </div>

            <div className="hamburger">
                <img
                    id="hamburger-button"
                    src="assets/hamburger.svg"
                    alt=":::"
                />
            </div>
        </nav>
    );
}
