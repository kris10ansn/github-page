import React from "react";
import "./SectionTitle.scss";

export default function SectionTitle({ title, image, url }) {
    return (
        <section id={title} className="title">
            <a href={url} title={url} target="_blank" rel="noopener noreferrer">
                <img src={image} alt="Loading..." />
            </a>
            <h1>{title}</h1>
        </section>
    );
}
