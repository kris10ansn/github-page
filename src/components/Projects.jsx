import React from "react";
import projects from "../assets/projects/projects.json";
import "./Projects.scss";

export default function Projects() {
    return (
        <div className="projects">
            {projects.map(({ title, description, buttons, image }, index) => {
                const src = require(`../assets/projects/${image}`);

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
            })}
        </div>
    );
}
