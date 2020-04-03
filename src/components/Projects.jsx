import React from "react";
import projects from "../assets/projects/projects.json";
import "./Projects.scss";
import github from "../assets/github.svg";
import pin from "../assets/pin.svg";

export default function Projects() {
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
                {pinned ? <img src={pin} alt="pin" className="pinned" /> : ""}

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

            <div className="projects">{projects.map(createProject)}</div>
        </section>
    );
}
