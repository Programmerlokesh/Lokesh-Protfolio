import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/all";

const AboutSextion = () => {
  return (
    <>
      <section className="about_details">
        <div className="about_me">
          <div className="image">
            <img src="me.jpg" alt="Lokesh Image" />
          </div>
          <div className="about_myself">
            <div className="experience_text">
              <p>
                I'm a self-taught front-end JavaScript developer from India.
              </p>
            </div>
            <div className="email">
              <p>
                Email:
                <a href="mailto:lokeshdebnath8@gmail.com">
                  lokeshdebnath8@gmail.com
                </a>
              </p>
            </div>
            <div className="phone">
              <p>
                Phone: <a href="tel:+91 9733116447"> +91 9733116447</a>
              </p>
            </div>
            <div className="resume">
              <p>
                Resume:
                <a href="">Click to download</a>
              </p>
            </div>
            <div className="social_link">
              <a href="https://github.com/Programmerlokesh" target="_blank">
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/lokesh-debnath-b1302921a/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/lokesh.2001/" target="_blank">
                <FaInstagramSquare />
              </a>
              <a href="https://www.facebook.com/lo.kesh.35513" target="_blank">
                <FaFacebookSquare />
              </a>
            </div>
          </div>
        </div>

        <div className="about_work">
          <div className="showoff">
            <p>
              I have worked with a bunch of technologies in the web development
              world. I always try to learn new things and do experiment with
              them and I always try to keep myself up-to-date as this field is
              constantly evolving.
            </p>
          </div>
          <div className="showoff_technology">
            <p>Here are some of the technologies I have worked with:</p>
          </div>

          <div className="working_technology">
            <div className="frontend">
              <p className="first_box">Frontend</p>
              <div className="launguage">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>SCSS</p>
                <p>ReactJS</p>
                <p>Redux</p>
                <p>Styled Components</p>
                <p>ContextApi</p>
              </div>
            </div>
            <div className="others">
              <p className="second_box">Others</p>
              <div className="launguage">
                <p>github</p>
                <p>git</p>
                <p>Responsive Design</p>
                <p>SEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSextion;
