import "./App.scss";
import github from "./assets/github.svg";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Header></Header>
            <SectionTitle
                title="projects"
                image={github}
                url="https://github.com/kris10ansn"
            ></SectionTitle>
            <Projects></Projects>
        </div>
    );
}

export default App;
