import "./App.scss";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <p id="outdated-message">
                This is an old website, for updated info check out{" "}
                <a href="https://github.com/kris10ansn">
                    https://github.com/kris10ansn
                </a>
            </p>
            <Header></Header>
            <Projects></Projects>
        </div>
    );
}

export default App;
