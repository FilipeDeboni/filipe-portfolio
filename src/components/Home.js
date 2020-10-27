import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="pageCard pageCardHome container" id="home">
        <h1 className="home-font-title">Hello,</h1>
        <h1 className="home-font-title">
          my name is <span className="yellow text-nowrap">Filipe Deboni</span>,
        </h1>
        <h5>
          and I am a <span className="yellow"> Front-End</span> Developer
        </h5>
        <h5>living in São Paulo, Brazil</h5>
      </div>
    </div>
  );
}

export default Home;
