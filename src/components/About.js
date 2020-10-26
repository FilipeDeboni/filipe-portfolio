import React from "react";
import Skills from "./Skills";
import "./About.css";

function About() {
  return (
    <div
      className="pageCard responsiveText container pt-5 final-card"
      id="about"
    >
      <h1 className="fontTitle mb-4">About</h1>
      <div className="row p-0px">
        <div className="col-lg-6 order-lg-2 col-xl-4 order-xl-1">
          <p>falar sobre a faculdade</p>
          <p>
            The Front-End gathers all my interests: logic, problem-solving,
            humans and creativity. My journey has always been based on
            transparency, passion for learning and assertive communication.
          </p>
          <p>
            As a good INTJ and Type 5 personality type, I’m an avid lifelong
            learner, meticulous, analythical, curious and creative. On the other
            hand, things that drains my energy are deal with people who put
            emotions over rationality and small talks. My bachelor in Psychology
            helped me a lot with that points and also to think strategically and
            to relate better with people.
          </p>
          <p>
            I work to make awesome applications. One that is easy to use,
            beautiful, accessible and frustration-free for users, making their
            life easier.
          </p>
        </div>

        <div className="card card-about col-lg-6 order-lg-1 col-xl-4 order-xl-2">
          <h5 className="m-4 card-title">Skills</h5>
          <div className="row justify-content-center pb-3">
            <Skills
              icon={<i className="yellow fab fa-react"></i>}
              skill="React.JS"
            ></Skills>
            <Skills
              icon={<i className="yellow fab fa-js-square"></i>}
              skill="JavaScript"
            ></Skills>
            <Skills
              icon={<i className="yellow fab fa-html5"></i>}
              skill="HTML"
            ></Skills>
            <Skills
              icon={<i className="yellow fab fa-css3-alt"></i>}
              skill="CSS"
            ></Skills>
            <Skills
              icon={<i className="yellow fab fa-bootstrap"></i>}
              skill="Bootstrap"
            ></Skills>
            <Skills
              icon={<i className="yellow fab fa-node-js"></i>}
              skill="Node.JS"
            ></Skills>
            <Skills
              icon={<i className="yellow fab fa-node-js"></i>}
              skill="Express.JS"
            ></Skills>
            <Skills
              icon={<i className="yellow fas fa-server"></i>}
              skill="MongoDB"
            ></Skills>
            <Skills
              icon={<i className="yellow fab fa-github-square"></i>}
              skill="Git & GitHub"
            ></Skills>
          </div>
        </div>

        <div className="card card-about col-lg-6 order-lg-1 col-xl-4 order-xl-3">
          <h5 className="m-4 card-title">Let's make something great!</h5>
          <p className="card-text">
            If you want to get in touch or just say hi, feel free to reach out
            through any platforms bellow and let's talk
          </p>
          <div className="d-flex justify-content-center p-2">
            <button className="icons">
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button className="icons">
              <i className="far fa-envelope-open"></i>
            </button>
            <button className="icons">
              <i className="fab fa-github"></i>
            </button>

            <button className="resumee-button">
              <span className="">Download my Resumee</span>
            </button>
          </div>
        </div>

        {/* After, insert some of the Companies I worked with */}
      </div>
    </div>
  );
}

export default About;
