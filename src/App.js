import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { loadCartItems } from "./redux/slices/cartSlice";

import { Footer, Header, Cart, Home, Checkout, OrderDone } from "./components";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  if (localStorage.getItem("cartItems")) {
    dispatch(loadCartItems());
  }
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-done" element={<OrderDone />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
