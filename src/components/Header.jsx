import React from "react";
import "./Header.scss";
import code from "../assets/code.png";

import { Link } from "react-scroll";

export default function Header() {
    return (
        <header>
            <div className="content">
                <h1>Kristian Apps</h1>

                <div className="desc">
                    <p>
                        Free, open source apps and tools. I'm a student and
                        coding hobbyist who makes tools and application i want
                        or need myself.
                    </p>
                    <div className="remove-small">
                        <p>
                            Check out my work below. I appreciate any and all
                            support.
                        </p>
                    </div>
                </div>

                <div className="buttons">
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="more">
                            View more <span className="arrows">»</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="jumbo">
                <img
                    className="jumbo"
                    src={code}
                    alt=""
                    title="Backend code for Snake Multiplayer"
                />
            </div>
        </header>
    );
}
