import React from "react";
import {
  FaEye,
  FaShoppingCart,
  FaStar,
  FaStarHalf,
  FaTrashAlt,
} from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../ShopCart/ShopCart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProductSlice } from "../../redux/slice/deleteSlice";
import { addToCart } from "../../redux/slice/addTocartSlice";

const ShopCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteProductSlice(id));
  };

  // add to cart

  const handleCart = (product) => {
    dispatch(addToCart(product));
  };

  const Rating = Array.from({ length: 5 }, (dist, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {product.rating >= index + 1 ? (
          <FaStar />
        ) : product.rating >= numbers ? (
          <FaStarHalf />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return (
    <>
      <div className=" shop-card col-lg-3 col-md-6">
        <div className="card text-center m-2">
          <img
            src={`http://localhost:5000/${product.image}`}
            alt={product.name}
          />
          <div className="card-body">
            <h3>{product.name}</h3>
            <p className="shop-rating text-warning">{Rating}</p>
            <p className="shop-price text-bold">
              $ {parseFloat(product.price).toFixed(2)}
            </p>
            <div className="card-icons">
              <FaTrashAlt
                onClick={() => handleDelete(product._id)}
                className="text-danger"
              />

              <Link to={`/product/${product._id}`}>
                <FaEye className="text-primary" />
              </Link>
              <FaShoppingCart
                onClick={() => handleCart(product)}
                className="text-info"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
