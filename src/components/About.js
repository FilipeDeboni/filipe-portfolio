import React from "react";
import Skills from "./Skills";
import "./About.css";

function About() {
  return (
    <div className="page-card responsive-text container my-4" id="about">
      <h1 className="font-title pb-4">About Me</h1>
      <div className="row">
        <div className="d-flex flex-column justify-content-center align-items-center about-text col-12 col-lg-6">
          <p>
            The Front-End has the power to gather all my interests: logic,
            problem-solving, humans and creativity. I'm currently studying{" "}
            <span className="yellow">Systems Analysis and Development</span>{" "}
            graduation and finished Ironhack Web Development Bootcamp on 2020.
          </p>
          <p>
            As a good{" "}
            <a
              href="https://www.16personalities.com/intj-personality"
              className="yellow hover"
            >
              INTJ
            </a>{" "}
            and{" "}
            <a
              href="https://www.truity.com/enneagram/personality-type-5-investigator"
              className="yellow hover"
            >
              Type 5
            </a>{" "}
            personality type, I’m an avid knowledge seeker, meticulous,
            versatyle, analythical, curious and creative. On the other hand,
            things I'm not so good at is to deal with people who put emotions
            over rationality and when I'm focused I can seem to be in my on
            world. My bachelor in Psychology helped me a lot with that points,
            also to think strategically and to relate better with people.
          </p>
          {/* <p>
            I work to make awesome applications. One that is easy to use,
            beautiful, accessible and frustration-free for users, making their
            life easier.
          </p> */}
        </div>

        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column justify-content-center align-items-center card card-about-skills">
            <h5 className="m-4 card-title-about">My Skills</h5>
            <div className="row justify-content-center">
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
          <div className="">
            <div className="d-flex flex-column justify-content-center align-items-center card card-about-contact col">
              <h5 className="m-4 card-title-about">Contact</h5>
              <p className="card-text-about">
                If you want to get in touch or just say hi, feel free to reach
                me out through any platform bellow and let's talk
              </p>
              <div className="contact-box-icons pb-2">
                <a className="icons hover">
                  <i className="far fa-envelope-open"></i>
                </a>
                <a
                  className="icons hover"
                  target="_blank"
                  href="https://www.linkedin.com/in/filipedeboni/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="icons hover"
                  target="_blank"
                  href="https://github.com/FilipeDeboni"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="text-button resumee-size hover"
                  target="_blank"
                  href="#"
                >
                  <span className="">
                    <i className="icon-size pr-1 fas fa-arrow-circle-down"></i>
                    Download my Resumee
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
