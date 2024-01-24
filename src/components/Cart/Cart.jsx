import React, { Fragment } from "react";

import { Container, Row, Col } from "reactstrap";

import "./cart.css";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <section className="cart-page">
      <Container>
        <Row>
          <Col className="text-center p-5">
            <h2>Cart</h2>
          </Col>
        </Row>
        <Row>
          {cart?.length === 0 ? (
            <h2 className="text-center">Your cart is empty</h2>
          ) : (
            <Fragment>
              <Col lg="6">
                {cart?.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </Col>
              <Col lg="6">
                <div className="cart-summary">
                  <h3>Order Summary</h3>
                  <div className="cart-summary-body">
                    <div className="cart-summary-item">
                      <p>Cart total</p>
                      <p>{cartItems?.totalAmount} $</p>
                    </div>
                    <div className="cart-summary-item">
                      <p>Tax</p>
                      <p>24 $</p>
                    </div>
                    <div className="cart-summary-item">
                      <p>Delivery</p>
                      <p>16 $</p>
                    </div>
                    <div className="break"></div>
                    <div className="cart-summary-item">
                      <p>Total</p>
                      <p>{cartItems?.totalAmount + 16 + 24} $</p>
                    </div>
                  </div>
                  <div className="cart-summary-footer">
                    <button onClick={() => navigate("/checkout")}>
                      Checkout
                    </button>
                  </div>
                </div>
              </Col>
            </Fragment>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
