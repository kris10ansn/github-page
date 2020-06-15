import React, { useEffect, useRef } from "react";
import "./Header.scss";
import code from "../assets/code.png";

import { Link } from "react-scroll";

export default function Header() {
    const headerImage = useRef();
    const headerImageAspectRatio = 1209 / 811;

    const resizeHeaderImage = (ref, ratio) => {
        if (ref.current) {
            const { height } = window.getComputedStyle(ref.current);
            const width = parseFloat(height) * ratio;

            ref.current.style.width = `${width}px`;
        }
    };

    useEffect(() => {
        const callback = () =>
            resizeHeaderImage(headerImage, headerImageAspectRatio);

        window.addEventListener("resize", callback);
        callback();
    }, [headerImage, headerImageAspectRatio]);

    return (
        <header>
            <div className="content">
                <h1>Kristian Apps</h1>

                <div className="desc">
                    <p>
                        Free, open source apps and tools. I'm a student and
                        coding hobbyist who makes tools and application I want
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
                    ref={headerImage}
                    alt="code"
                    title="Backend code for Snake Multiplayer"
                />
            </div>
        </header>
    );
}
