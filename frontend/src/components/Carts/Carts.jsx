import React from "react";
import "../Carts/Carts.css";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  IncrementItems,
  RemoveAllProducts,
  decrementItems,
  deleteItems,
} from "../../redux/slice/addTocartSlice";

const Carts = ({ isCarts, setIsCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { carts, loading, error, message } = cart;

  const handleDecrement = (product) => {
    dispatch(decrementItems(product));
  };

  //   increment
  const handleIncrement = (product) => {
    dispatch(IncrementItems(product));
  };

  //   Delete Carts

  const handleDelete = (product) => {
    dispatch(deleteItems(product));
  };

  const total = carts?.reduce((a, b) => a + b.price * b.qty, 0);
  const totalPrice = total.toFixed(2);
  return loading ? (
    <p className="text-center">Loading...</p>
  ) : error ? (
    <p className="text-center ">{message}</p>
  ) : (
    <>
      <header className="carts">
        <div className={isCarts ? "carts-active" : "carts-header"}>
          <div className="container cart-overflow">
            <div className="d-flex justify-content-between align-items-center mt-2">
              <h2>Shopping Cart ({carts?.length})</h2>
              <FaTimes size={20} onClick={() => setIsCart((prev) => !prev)} />
            </div>
            <hr />
            {carts?.length === 0 ? (
              <>
                <div className="cart-message">
                  <p>No Products The Carts is Empty!</p>
                </div>
              </>
            ) : (
              carts?.map((cart) => (
                <div
                  className=" carts-content shadow-sm p-3 my-3 d-flex justify-content-between align-i"
                  key={cart._id}
                >
                  <div className="cart-image">
                  <img src={`http://localhost:5000/${cart.image}`} alt={cart.name} />
                  </div>
                  <div className="carts-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="carts-name">{cart.name}</div>
                      <div className="carts-price ms-3">
                        ${parseFloat(cart.price).toFixed(2)}
                      </div>
                      <div className="cart-quantity d-flex align-items-center">
                        <div onClick={() => handleIncrement(cart)}>-</div>
                        <div>{cart.qty}</div>
                        <div onClick={() => handleDecrement(cart)}>+</div>
                      </div>
                      <FaTrash
                        onClick={() => handleDelete(cart)}
                        className="text-danger ms-3"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
            <div className="cart-total-price">
              {carts?.length > 0 && (
                <div className="p-2">
                  <strong>Total:</strong> ${totalPrice}
                </div>
              )}
            </div>
            {carts?.length > 0 && <div className="remove-all p-2">
              <button
                onClick={() => dispatch(RemoveAllProducts())}
                className="btn btn-outline-danger btn-clear"
              >
                Clear
              </button>
            </div>}
          </div>
        </div>
      </header>
    </>
  );
};

export default Carts;
