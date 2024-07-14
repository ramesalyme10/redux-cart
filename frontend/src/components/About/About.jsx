import React from "react";
import { Link } from "react-router-dom";
import "../About/About.css";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import popular1 from "../../assets/popular1.png";
import popular2 from "../../assets/popular2.png";
import popular3 from "../../assets/popular3.png";
import popular4 from "../../assets/popular4.png";


const About = () => {
  return (
    <header className="about">
      <div className="container">
        <div className="header-about">
          <Link to={"/"}>Home</Link> / <Link to={"/about"}>About</Link>
        </div>
        <div className="our-story">
          <div className="about-our-story">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <img src={about1} alt="about" />
        </div>
        <div className="our-story ">
          <div className="about-our-story">
            <h2>Journey start from</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <img src={about2} alt="about" />
        </div>
        <div className="our-story ">
          <div className="about-our-story">
            <h2>2020</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 ">
              <div className="card">
                <img src={popular1} alt="popular" />
                <div className="card-body">
                  <button>Shop Now</button>
                </div>
                <div className="card-link">
                <Link>Glasses</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img src={popular2} alt="popular" />
                 <div className="card-body">
                  <button>Shop Now</button>
                </div>
                <div className="card-link">
                <Link>WATCHES</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img src={popular3} alt="popular" />
                 <div className="card-body">
                  <button>Shop Now</button>
                </div>
                <div className="card-link">
                <Link>JACKETS</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img src={popular4} alt="popular" />
                 <div className="card-body">
                  <button>Shop Now</button>
                </div>
                <div className="card-link">
                <Link>CLOTHES</Link>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </header>
  );
};

export default About;
