import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from "../../assets/testimonial-1.png";
import test2 from "../../assets/testimonial-2.png";
import test3 from "../../assets/testimonial-3.png";
import test4 from "../../assets/testimonial-4.png";

const ServiceSlide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="card m-2 p-2">
            <div className="d-flex justify-content-center align-items-center">
              <div className="slider-image">
                <img src={test1} alt="test" />
              </div>
              <div className="slider-tab ms-3">
                <h2>Client Name</h2>
                <p>Profession</p>
              </div>
            </div>
            <div className="card-body">
              <p className="lead-text">
                 sit amet consectetur adipisicing elit.
                Consequuntur saepe, corporis mollitia consequatur repellendus
                delectus laborum maxime 
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card m-2 p-2">
            <div className="d-flex justify-content-center align-items-center">
              <div className="slider-image">
                <img src={test2} alt="test" />
              </div>
              <div className="slider-tab ms-3">
                <h2>Client Name</h2>
                <p>Profession</p>
              </div>
            </div>
            <div className="card-body">
              <p className="lead-text">
                 sit amet consectetur adipisicing elit.
                Consequuntur saepe, corporis mollitia consequatur repellendus
                delectus laborum maxime 
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card m-2 p-2">
            <div className="d-flex justify-content-center align-items-center">
              <div className="slider-image">
                <img src={test3} alt="test" />
              </div>
              <div className="slider-tab ms-3">
                <h2>Client Name</h2>
                <p>Profession</p>
              </div>
            </div>
            <div className="card-body">
              <p className="lead-text">
                 sit amet consectetur adipisicing elit.
                Consequuntur saepe, corporis mollitia consequatur repellendus
                delectus laborum maxime 
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card m-2 p-2">
            <div className="d-flex align-items-center">
              <div className="slider-image">
                <img src={test4} alt="test" />
              </div>
              <div className="slider-tab ms-3">
                <h2>Client Name</h2>
                <p>Profession</p>
              </div>
            </div>
            <div className="card-body">
              <p className="lead-text">
                 sit amet consectetur adipisicing elit.
                Consequuntur saepe, corporis mollitia consequatur repellendus
                delectus laborum maxime 
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ServiceSlide;
