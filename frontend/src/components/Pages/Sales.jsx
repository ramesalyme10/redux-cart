import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flat from "../../assets/flat-hill.png";
import blue from "../../assets/blue-ring.png";
import wallet from "../../assets/wallet.png";
import wrist from "../../assets/wrist-watch.png";
import bag from "../../assets/handbag.png";
import lath from "../../assets/lathered-wristwatch.png";
import tie from "../../assets/tie.png";
import erring from "../../assets/wrist-watch.png";

const Sales = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        breakpoint: 600,
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
          <div className="card">
            <img src={flat} alt="flat" />
            <div className="card-body">
              <h2>Flat Hill SlingBack</h2>
              <del>$200</del>
              <span>$175</span>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={blue} alt="flat" />
            <div className="card-body">
              <h2>Ocean Blue Ring</h2>
              <del>$150</del>
              <span>$100</span>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={wallet} alt="flat" />
            <div className="card-body">
              <h2>Brown Leathered Wallet</h2>
              <del>$80</del>
              <span>$40</span>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={wrist} alt="flat" />
            <div className="card-body">
              <h2>Silverside Wristwatch</h2>
              <del>$400</del>
              <span>$200</span>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={bag} alt="flat" />
            <div className="card-body">
              <h2>Marie Claire Handbag</h2>
              <del>$399</del>
              <span>$365</span>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={erring} alt="flat" />
            <div className="card-body">
              <h2>Red Gem Earrings</h2>
              <del>$489</del>
              <span>$466</span>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={lath} alt="flat" />
            <div className="card-body">
              <h2>Black Leathered Wristwatch</h2>
              <del>$799</del>
              <span>$745</span>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={tie} alt="flat" />
            <div className="card-body">
              <h2>Red-White Stripped Tie</h2>
              <del>$299</del>
              <span>$243</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Sales;
