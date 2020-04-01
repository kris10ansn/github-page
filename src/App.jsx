import "./App.scss";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Header></Header>
            <Projects></Projects>
        </div>
    );
}

export default App;
