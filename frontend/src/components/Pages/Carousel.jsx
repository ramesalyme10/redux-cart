import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../../assets/images_1.png";
import image2 from "../../assets/images_2.png";
import image3 from "../../assets/images_3.png";
import image4 from '../../assets/images_4.png';

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="home-page-content ">
          <p className="summer">Summer Collection</p>
          <h1>Fall - Winter <br /> Collections 2030</h1>
          <p className="home-description">
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
          <Link to={"/shop"}>
            Shop NoW <FaArrowRightLong />
          </Link>
        </div>
        <img src={image1} alt="image" />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="home-page-content ">
          <p className="summer">Summer Collection</p>
          <h1>Fall - Winter <br /> Collections 2030</h1>
          <p className="home-description">
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
          <Link to={"/shop"}>
            Shop NoW <FaArrowRightLong />
          </Link>
        </div>
        <img src={image2} alt="image" />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="home-page-content ">
          <p className="summer">Summer Collection</p>
          <h1>Fall - Winter <br /> Collections 2030</h1>
          <p className="home-description">
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
          <Link to={"/shop"}>
            Shop NoW <FaArrowRightLong />
          </Link>
        </div>
        <img src={image3} alt="image" />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="home-page-content ">
          <p className="summer">Summer Collection</p>
          <h1>Fall - Winter <br /> Collections 2030</h1>
          <p className="home-description">
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
          <Link to={"/shop"}>
            Shop NoW <FaArrowRightLong />
          </Link>
        </div>
        <img src={image4} alt="image" />
      </div>
      
    </Slider>
  );
};

export default Carousel;
