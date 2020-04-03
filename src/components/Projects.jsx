import React from "react";
import projects from "../assets/projects/projects.json";
import "./Projects.scss";
import github from "../assets/github.svg";
import { createRef } from "react";
import { useEffect } from "react";
import { ReactComponent as PinSVG } from "../assets/pin.svg";

export default function Projects() {
    const projectDivRef = createRef();

    const getIntegerFromCssVariable = (name, el) => {
        const element = el || document.body;
        const value = getComputedStyle(element).getPropertyValue(name);

        return parseInt(value);
    };

    const setCssVariable = (name, value, el) => {
        const element = el || document.body;
        element.style.setProperty(name, value);
    };

    useEffect(() => {
        const onResize = () => {
            const cols = getIntegerFromCssVariable("--project-cols");

            setCssVariable(
                "--card-margin-multiplier",
                {
                    1: 1,
                    2: 2,
                    3: 1,
                    4: 0.67,
                    5: 0.5,
                    7: 0.34,
                }[cols],
                projectDivRef.current
            );
        };
        window.addEventListener("resize", onResize);
        onResize();
    });

    const createButton = ({ text, url, disabled }, index) => {
        return (
            <a href={url} target="_blank" key={index} rel="noopener noreferrer">
                <button disabled={Boolean(disabled)} title={disabled}>
                    {text}
                </button>
            </a>
        );
    };

    const createProject = (
        { title, description, buttons, image, pinned },
        index
    ) => {
        const src = require(`../assets/projects/images/${image}`);

        return (
            <div className="card" key={index}>
                {pinned ? <PinSVG className="pinned" /> : ""}

                <div className="info">
                    <img src={src} alt={title} />
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="buttons">{buttons.map(createButton)}</div>
            </div>
        );
    };

    return (
        <section name="projects">
            <div className="title">
                <a
                    href="https://github.com/kris10ansn"
                    title="projects"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={github} alt="Loading..." />
                </a>
                <h1>Projects</h1>
            </div>

            <div className="projects" ref={projectDivRef}>
                {projects.map(createProject)}
            </div>
        </section>
    );
}
