import React from "react";

import "./cartItem.css";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeItemFromCart,
} from "../../../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItemCart = () => {
    dispatch(removeItemFromCart(item.id));
  };
  const deleteItem = () => {
    dispatch(deleteFromCart(item.id));
  };
  const addItem = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="container-cart-item">
      <div className="cart-item-img-container">
        <img src={item.img} alt="placeholder" className="cart-item-img" />
      </div>
      <div className="cart-item-body">
        <div className="cart-item-info">
          <h3>{item.name}</h3>
          <p>{item.price} $</p>
        </div>
        <div className="cart-item-actions">
          <div className="cart-item-quantity">
            <button onClick={addItem}>
              <i className="ri-add-line"></i>
            </button>
            <span>{item.quantity}</span>
            <button onClick={deleteItem}>
              <i className="ri-subtract-line"></i>
            </button>
          </div>
          <button onClick={deleteItemCart}>
            <i className="ri-delete-bin-2-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
