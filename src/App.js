import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Projects} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Footer} />
        <Route path="/clover" component={Project1} />
        <Route path="/petfriendly" component={Project2} />
        <Route path="/portfolio" component={Project3} />
      </BrowserRouter>
    </div>
  );
}

export default App;
