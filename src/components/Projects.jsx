import React from "react";
import projects from "../assets/projects/projects.json";
import "./Projects.scss";
import github from "../assets/github.svg";

export default function Projects() {
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

            <div className="projects">
                {projects.map(
                    ({ title, description, buttons, image }, index) => {
                        const src = require(`../assets/projects/images/${image}`);

                        return (
                            <div className="card" key={index}>
                                <div className="info">
                                    <img src={src} alt={title} />
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                </div>
                                <div className="buttons">
                                    {buttons.map(({ text, url }, index) => (
                                        <a
                                            href={url}
                                            target="_blank"
                                            key={index}
                                            rel="noopener noreferrer"
                                        >
                                            <button>{text}</button>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
}
