import React, { useEffect } from "react";
import "../ProductsDetails/ProductsDetails.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProductSlice } from "../../redux/slice/detailsSlice";
import { FaStar, FaStarHalf, FaTrashAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { addToCart } from "../../redux/slice/addTocartSlice";

const ProductsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const { product, loading, error, success, message } = details;

  const Rating = Array.from({ length: 5 }, (dist, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {product?.rating >= index + 1 ? (
          <FaStar />
        ) : product?.rating >= numbers ? (
          <FaStarHalf />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  useEffect(() => {
    dispatch(detailsProductSlice(id));
  }, [dispatch, id]);



  const handleCart = (product) => {
    dispatch(addToCart(product))
 }


  return (
    <header className="single-page">
      <div className="container">
        {loading ? (
          <p className="text-center my-5">Loading...</p>
        ) : error ? (
          <p className="text-center my-5 ">{message}</p>
        ) : (
          <>
            <div className="single-page-content">
              <div className="grid-2">
                <div className="single-tab-1">
                  <div className="card">
                  <img src={`http://localhost:5000/${product?.image}`} alt={product?.name} />
                  </div>
                </div>
                <div className="single-tab-2">
                  <div className="card p-3">
                    <div className="single-home-shop">
                      <Link to={'/'}>Home  </Link> / <Link to={'/shop'}>{product?.name}</Link>
                    </div>
                    <h2>{product?.name}</h2>
                    <div className="single-flex">
                      <p className="single-price">
                        ${parseFloat(product?.price).toFixed(2)}
                      </p>
                      <div className="text-warning">{Rating}</div>
                    </div>
                    <div className="single-category">
                        <span>{product?.category}</span>
                    </div>
                    <p>{product?.description}</p>
                    <div className="single-btn d-flex align-items-center">
                      <button
                        onClick={() => handleCart(product)}
                        style={{ marginRight: "15px", border: "none" }}
                        className="btn_cart"
                        href=""
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default ProductsDetails;
