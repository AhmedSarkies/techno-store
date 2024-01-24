import React from "react";

import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/slices/cartSlice";

import heartProduct from "../../assets/images/heart-product.svg";

import "./card.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        ...item,
        quantity: 1,
      })
    );
  };
  return (
    <div className="home-product-card">
      <div className="home-product-card-img-container">
        <img src={item.img} alt="placeholder" className="product-img" />
        <img src={heartProduct} alt="placeholder" className="heart" />
      </div>
      <div className="home-product-card-info">
        <h3>{item.name}</h3>
        <p>{item.price} $</p>
      </div>
      <div className="home-product-card-actions">
        <button onClick={addToCartHandler}>
          <i className="ri-shopping-cart-2-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
