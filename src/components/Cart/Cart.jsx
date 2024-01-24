import React from "react";

import { Container, Row, Col } from "reactstrap";

import "./cart.css";
import CartItem from "./CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { loadCartItems } from "../../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const { cart } = useSelector((state) => state.cart);

  return (
    <section className="cart-page">
      <Container>
        <Row>
          <Col className="text-center p-5">
            <h2>Cart</h2>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            {cart?.map((item) => (
              <CartItem item={item} />
            ))}
          </Col>
          <Col md="6">
            <div className="cart-summary">
              <h3>Summary</h3>
              <div className="cart-summary-body">
                <div className="cart-summary-item">
                  <p>Total Quantity</p>
                  <p>{cartItems?.totalQuantity}</p>
                </div>
                <div className="cart-summary-item">
                  <p>Total Amount</p>
                  <p>{cartItems?.totalAmount} $</p>
                </div>
                <div className="cart-summary-item">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="cart-summary-item">
                  <p>Estimated Total</p>
                  <p>{cartItems?.totalAmount} $</p>
                </div>
              </div>
              <div className="cart-summary-footer">
                <button>Checkout</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
