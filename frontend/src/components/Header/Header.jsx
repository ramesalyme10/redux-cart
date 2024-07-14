import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { CiShoppingBasket } from "react-icons/ci";
import {
  FaTwitter,
  FaPinterest,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = ({ isCarts, setIsCart }) => {
  const [isIcon, setIcon] = useState(false);
 
  const cart = useSelector((state) => state.cart);
  const { carts } = cart;
  return (
    <>
      {/* header nav DropDown */}
      <div className=" header-items-dropDown">
        <ul className={isIcon ? "dropdown-items-active" :"dropdown-items"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="dropdown-items-link ">
            <Link className="d-flex justify-content-between">Blog <RiArrowDropDownLine/></Link>
            <ul className="dropdown-link">
              <li>
                <Link to={"/post"}>createProducts</Link>
              </li>
             
            </ul>
          </li>
        </ul>
      </div>
      <header className="header-nav">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header-items-center">
              <ul className="d-flex justify-content-between align-items-center my-3">
                <li>
                  <Link to={"/"}>home</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li>
                  <Link to={"/about"}>about</Link>
                </li>
                <li>
                  <Link to={"/services"}>services</Link>
                </li>
                <li className="header-post">
                  <Link to={"/"}>Pages</Link><RiArrowDropDownLine/>
                  <ul className="blog-items">
                    <li>
                      <Link to={"/post"}>createProducts</Link>
                    </li>
                   
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-items-right d-flex justify-content-between align-items-center my-2 ">
              <ul className="d-flex justify-content-between align-items-center my-2">
                <li>
                  <Link to={"/"}>
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FaPinterest />
                  </Link>
                </li>
                <li>
                  <CiShoppingBasket
                    onClick={() => setIsCart((prev) => !prev)}
                  />
                  <span>{carts?.length}</span>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setIcon((prev) => !prev)}
              className="header-bars-times"
            >
              {isIcon ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
