import React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import logo from "../../assets/images/logo.svg";
import heart from "../../assets/images/heart.svg";
import shoppingCar from "../../assets/images/shopping-car.svg";

import "./header.css";

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col xs="12">
            <div className="header-container">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="menu-container">
                <ul className="menu">
                  <li className="menu-item">
                    <i className="ri-search-line"></i>
                  </li>
                  <li className="menu-item">
                    <Link to="/">
                      <img src={heart} alt="heart" />
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/cart">
                      <img src={shoppingCar} alt="shopping-car" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
