import React from "react";
import "../Services/Services.css";
import {
  FaCartPlus,
  FaCog,
  FaGlobe,
  FaHeadset,
  FaHotel,
  FaUser,
  FaUserTie,
  FaUtensils,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceSlide from "../Pages/ServiceSlide";




const Services = () => {
  return (
    <>
      <header className="bg_service">
        <div className="container">
          <div className="service-content-title">
            <h2>Services</h2>
            <Link to={'/'}>Home</Link> / <Link to={'/shop'}>Shop</Link> / <Link to={'/about'}>About</Link>
          </div>
        </div>
      </header>
      <header className="services">
        <div className="text-center our-services">
          <p className="our-text">Services</p>
          <h1>Our Services</h1>
        </div>
        <div className="container">
          <div className="services-content">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card my-2">
                  <FaGlobe />
                  <div className="services-body">
                    <h2>WorldWide Tours</h2>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card my-2">
                  <FaHotel />
                  <div className="services-body">
                    <h2>Hotel Reservation</h2>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card my-2">
                  <FaUser />
                  <div className="services-body">
                    <h2>Travel Guides</h2>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card my-2">
                  <FaCog />
                  <div className="services-body">
                    <h2>Event Management</h2>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card my-2">
                  <FaUserTie />
                  <div className="services-body">
                    <h2>Master Chefs</h2>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card my-2">
                  <FaUtensils />
                  <div className="services-body">
                    <h2>Quality Food</h2>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card my-2">
                  <FaCartPlus />
                  <div className="services-body">
                    <h2>Online Order</h2>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card my-2">
                  <FaHeadset />
                  <div className="services-body">
                    <h2>24/7 Service</h2>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* services carousel Slick */}

       <header className="header-slice">
        <div className="container">
          <div className="our-clients text-center w-50 mx-auto my-5">
            <p>TESTIMONIAL</p>
            <h1>What Our Clients Say About Our Digital Services</h1>
          </div>
          <ServiceSlide/>
        </div>
       </header>
    </>
  );
};

export default Services;
