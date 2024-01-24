import React from "react";

import { Container, Row, Col } from "reactstrap";

import { Card, Hero } from "../";

import truck from "../../assets/images/truck.svg";
import time from "../../assets/images/time.svg";
import hand from "../../assets/images/hand.svg";
import percentage from "../../assets/images/percentage.svg";
import product from "../../assets/images/product.png";

import "./home.css";

const items = [
  {
    id: 1,
    name: "Product 1",
    img: product,
    price: 100,
  },
  {
    id: 2,
    name: "Product 1",
    img: product,
    price: 100,
  },
  {
    id: 3,
    name: "Product 1",
    img: product,
    price: 100,
  },
  {
    id: 4,
    name: "Product 1",
    img: product,
    price: 100,
  },
  {
    id: 5,
    name: "Product 1",
    img: product,
    price: 100,
  },
  {
    id: 6,
    name: "Product 1",
    img: product,
    price: 100,
  },
  {
    id: 7,
    name: "Product 1",
    img: product,
    price: 100,
  },
  {
    id: 8,
    name: "Product 1",
    img: product,
    price: 100,
  },
];

const Home = () => {
  return (
    <section>
      <Hero />
      <section className="home-items-container">
        <Container>
          <Row>
            <Col xs="12" sm="6" md="3">
              <p className="d-flex justify-content-center align-items-center gap-2 text-white m-0">
                <img src={truck} alt="placeholder" />
                lorem ipsum
              </p>
            </Col>
            <Col xs="12" sm="6" md="3">
              <p className="d-flex justify-content-center align-items-center gap-2 text-white m-0">
                <img src={time} alt="placeholder" />
                lorem ipsum
              </p>
            </Col>
            <Col xs="12" sm="6" md="3">
              <p className="d-flex justify-content-center align-items-center gap-2 text-white m-0">
                <img src={hand} alt="placeholder" />
                lorem ipsum
              </p>
            </Col>
            <Col xs="12" sm="6" md="3">
              <p className="d-flex justify-content-center align-items-center gap-2 text-white m-0">
                <img src={percentage} alt="placeholder" />
                lorem ipsum
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home-products-container">
        <Container>
          <Row>
            <Col xs="12">
              <h2 className="text-center">Products</h2>
            </Col>
          </Row>
          <Row>
            {items.map((item) => (
              <Col xs="12" sm="6" md="4" lg="3" className="g-4" key={item.id}>
                <Card item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Home;
