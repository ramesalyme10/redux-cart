import React from "react";
import Carousel from "../components/Pages/Carousel";
import { FaArrowRightLong, FaEye, FaHeart } from "react-icons/fa6";
import { TbCornerUpRight } from "react-icons/tb";
import "../HomePage/HomePage.css";
import him from "../assets/him.png";
import her from "../assets/her.png";
import Sales from "../components/Pages/Sales";
import sharp from "../assets/sharp-dress.png";
import outfit from "../assets/outfit.png";
import vanity from "../assets/vanity-bag.png";
import hat from "../assets/hat.png";
import hight from "../assets/high-heels.png";
import shoes from "../assets/shoes-blog-1.png";
import fashion from "../assets/fashion-blog-2.png";
import spring from "../assets/spring-dress-blog-3.png";
import author from "../assets/author-1.png";
import author2 from "../assets/author-2.png";
import author3 from "../assets/author-3.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <header className="home-page">
      <div className="container">
        <Carousel />
        <div className="home-dropped  text-center">
          <div className="home-content">
            <p>Just dropped & never seen before</p>
            <h1>Designed specially for you</h1>
          </div>
          <div className="my-5">
            <div className="d-flex justify-content-center align-items-center">
              <div className="home-page-image">
                <img src={her} alt="her" />
                <div className="home-page-title">
                  <p>For Him</p>
                </div>
              </div>
              <div className="home-page-image">
                <img src={him} alt="him" />
                <div className="home-page-title">
                  <p>For Him</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flash-sales text-center my-5 ">
          <h1 className="my-5">Flash Sales</h1>
          <Sales />
        </div>
        <div className="dress-sharp my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="dress-content">
                <span>Everyday collection 2021</span>
                <h1>Be yourself</h1>
                <p>
                  The ideal selection for your everyday use ina Super Saver
                  range within a reasonable price range is here for you to keep
                  you stay steady % trendy.
                </p>
                <button className=" btn-dark mb-5">Explore</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dress-content-image">
                <img src={outfit} alt="image" />
              </div>
            </div>

            {/*Vanity Bags  */}
            <div className="my-5">
              <div className="row">
                <div className="home-page-image-3 col-md-4">
                  <img src={vanity} alt="her" />
                </div>
                <div className="home-page-image-3 col-md-4">
                  <img src={hat} alt="him" />
                </div>
                <div className="home-page-image-3 col-md-4">
                  <img src={hight} alt="him" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dress-sharp my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="dress-content">
                <h1>Dress Sharp Everyday</h1>
                <p>
                  We have the premium set of formal wears for to make you look
                  confident and comfortable at your job.
                </p>
                <button className=" btn-dark mb-5">Explore Collections</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dress-content-image">
                <img src={sharp} alt="image" />
              </div>
            </div>
          </div>
        </div>

        {/* Fashion  */}
        <div className=" author-fashion my-5">
          <div className="row">
            <div className=" col-md-4">
              <div className="card">
                <img src={shoes} alt="her" />

                <div className="card-body mt-5">
                  <h3>What do your shoes... </h3>
                  <p>
                    Can you really judge a person by their shoes? Well, nobody
                    should judge, but yes it’s true that shoes do say a lot
                    about a person. Shoes matter in making a first impression to
                    the strangers we have to meet everyday...
                  </p>
                  <Link>
                    Read more <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="card">
                <img src={fashion} alt="him" />
               
                <div className="card-body mt-5">
                  <h3>Fashion Weekened t... </h3>
                  <p>
                    A bangning catwalk show, an inspiring shoe exhibition, a
                    nostalgic pop-up museum, and the finale of the Bata Young
                    Designers’ Challange- our Fashion weekend 2021 at the
                    historuc Zofin Palace in Pargue...
                  </p>
                  <Link>
                    Read more <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="card">
                <img src={spring} alt="him" />
                
                <div className="card-body mt-5">
                  <h3>Spring dress try-on ... </h3>
                  <p>
                    Every spring I start going through dress withdrawals and get
                    so excited for the bright colors and patterns of a new
                    season! I ordered some of the prettiest spring dresses and
                    wanted to share some of...
                  </p>
                  <Link>
                    Read more <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
