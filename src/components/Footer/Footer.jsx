import React from "react";

import { Container, Row, Col } from "reactstrap";

import logo from "../../assets/images/logo.svg";
import email from "../../assets/images/email.svg";
import phone from "../../assets/images/phone.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md="12">
            <div className="footer-container">
              <div className="footer-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="footer-info">
                <p>
                  <img src={email} alt="location" />
                  email@gmail.com
                </p>
                <p>
                  <img src={phone} alt="phone" />
                  +125 699 9171
                </p>
              </div>
              <div className="footer-social">
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
