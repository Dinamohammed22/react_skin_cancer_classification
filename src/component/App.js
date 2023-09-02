import React, { Component } from "react";
import Mainpage from "./Mainpage";
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Contact from "./Contact";
import Footer from "./Footer";
import Result from "./Result";
import { Route, BrowserRouter, NavLink, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
