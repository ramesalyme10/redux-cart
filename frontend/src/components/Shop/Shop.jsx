import React, { useEffect, useState } from "react";
import "../Shop/Shop.css";
import ShopCart from "../ShopCart/ShopCart";
import { useSelector, useDispatch } from "react-redux";
import { getProductSlice } from "../../redux/slice/getSlice";
import banner from "../../assets/banner.png";
import banner1 from "../../assets/banner_1.png";
import banner2 from "../../assets/banner_2.png";
import banner3 from "../../assets/banner_3.png";
import banner4 from "../../assets/banner_4.png";
import Pagination from "../Pages/Pagination";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  const indexOfLastPage = postPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const dispatch = useDispatch();
  const get = useSelector((state) => state.get);
  const { products, loading, error, message } = get;
  const productSlice = products?.slice(indexOfFirstPage, indexOfLastPage);
console.log(productSlice)
  const del = useSelector((state) => state.del);
  const { success } = del;

  useEffect(() => {
    dispatch(getProductSlice());
  }, [success]);

  const PageNate = (number) => setCurrentPage(number);

  return (
    <>
      <header className="shop">
        <div className="shop-content">
          <div className="row ">
            <div className="col-md-6">
              <div className="shop-banner">
                <img src={banner} alt="banner" />
                <div className="banner-card">
                  <h2>We Are Hexashop</h2>
                  <p>Awesome, clean & creative HTML5 Template</p>
                  <button>Purchase Now!</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-items-center">
                <div className="shop-banner-box">
                  <img src={banner1} alt="banner" />
                  <div className="banner-card">
                    <h2>Women</h2>
                    <p>Best Clothes For Women</p>
                  </div>
                  <div className="banner-card-shadow">
                    <h2>Women</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Est, cumque soluta{" "}
                    </p>
                    <button>Discover More</button>
                  </div>
                </div>
                <div className="shop-banner-box">
                  <img src={banner2} alt="banner" />
                  <div className="banner-card">
                    <h2>Men</h2>
                    <p>Best Clothes For Men</p>
                  </div>
                  <div className="banner-card-shadow">
                    <h2>Men</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Est, cumque soluta{" "}
                    </p>
                    <button>Discover More</button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="shop-banner-box">
                  <img src={banner3} alt="banner" />
                  <div className="banner-card">
                    <h2>Kids</h2>
                    <p>Best Clothes For Kids</p>
                  </div>
                  <div className="banner-card-shadow">
                    <h2>Kids</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Est, cumque soluta{" "}
                    </p>
                    <button>Discover More</button>
                  </div>
                </div>
                <div className="shop-banner-box">
                  <img src={banner4} alt="banner" />
                  <div className="banner-card">
                    <h2>Accessories</h2>
                    <p>Best Clothes For Accessories</p>
                  </div>
                  <div className="banner-card-shadow">
                    <h2>Accessories</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Est, cumque soluta{" "}
                    </p>
                    <button>Discover More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="browser">
        <div className="container">
          <div className="browser-content">
            <h1>shop with us</h1>
            <p>Browse from 230 latest items</p>
          </div>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center ">{message}</p>
          ) : (
            <>
              <div className="browser-products">
                <div className="row my-5">
                  {productSlice &&
                    productSlice.map((product) => {
                      return <ShopCart product={product} key={product._id} />;
                    })}
                </div>
                <div className="text-center">
                  <Pagination
                    postPerPage={postPerPage}
                    totalPrice={products?.length}
                    PageNate={PageNate}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Shop;
