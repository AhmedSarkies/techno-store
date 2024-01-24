import React from "react";

import orderDoneImg from "../../assets/images/order-done.png";

import "./order-done.css";
import { Col, Container, Row } from "reactstrap";

const OrderDone = () => {
  return (
    <section className="order-done-container">
      <Container>
        <Row
        className="justify-content-center align-items-center"
        >
          <Col lg="6" md="8" sm="10" xs="12" className="order-done">
            <h2 className="order-done-title">Your order is on its way</h2>
            <p className="order-done-description">
              Thank you for contacting with us
            </p>
            <img className="order-done-img" src={orderDoneImg} alt="Order" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderDone;
