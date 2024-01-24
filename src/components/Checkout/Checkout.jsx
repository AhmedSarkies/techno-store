import React, { Fragment } from "react";

import { Container, Row, Col } from "reactstrap";

import "./checkout.css";
import CartItem from "../Cart/CartItem/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
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
                </div>
              </Col>
              <Col
                lg="12"
                className="d-flex justify-content-center align-items-center flex-column text-center p-5"
              >
                <div className="pb-lg-5 pb-md-3 pb-2">
                  <h3 className="title-form">Location</h3>
                </div>
                <Col lg="6" md="8" sm="10" xs="12">
                  <form className="w-100">
                    <div className="form-group text-start mb-3">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group text-start mb-3">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        id="phone"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group text-start mb-3">
                      <label htmlFor="address">Address</label>
                      <textarea
                        id="address"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                    <div className="form-group mt-5 text-center">
                      <button onClick={() => navigate("/order-done")}>
                        Confirm Payment
                      </button>
                    </div>
                  </form>
                </Col>
              </Col>
            </Fragment>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
