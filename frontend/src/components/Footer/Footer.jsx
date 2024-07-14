import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <header className="footer my-5">
      <div className="container">
        <div className="footer-grid-4">
          <div className="footer-tab">
            <ul>
              <li>
                <h2>Company Info</h2>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/about"}>Affiliate</Link>
              </li>
              <li>
                <Link to={"/about"}>Fashion Blogger</Link>
              </li>
            </ul>
          </div>
          <div className="footer-tab">
              <ul>
                <li>
                  <h2>Help & Support</h2>
                </li>
                <li>
                  <Link to={"/about"}>Shipping Info</Link>
                </li>
                <li>
                  <Link to={"/about"}>Refunds</Link>
                </li>
                <li>
                  <Link to={"/about"}>How to Order</Link>
                </li>
                <li>
                  <Link to={"/about"}>How to Track</Link>
                </li>
                <li>
                  <Link to={"/about"}>Size Guides</Link>
                </li>
              </ul>
            </div>
            <div className="footer-tab">
              <ul>
                <li>
                  <h2>Customer Care</h2>
                </li>
                <li>
                  <Link to={"/about"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/about"}>Payment Methods</Link>
                </li>
                <li>
                  <Link to={"/about"}>Bonus Point</Link>
                </li>
              </ul>
            </div>
            <div className="footer-tab">
              <ul>
                <li>
                  <h2>Main Menes</h2>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li>
                  <Link to={"/services"}>Services</Link>
                </li>
                <li>
                  <Link to={"/post"}>Create Products</Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
