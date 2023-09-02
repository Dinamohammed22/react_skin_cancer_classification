import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="right-navbar">
          <img
            src={require("./images2/dry-skin.png")}
            className="imge-profile"
            alt="jhj"
          />
          <h3 className="logo-word">SKIN DOCTOR</h3>
        </div>
        <div className="left-navbar">
          <NavLink to="/">Main page</NavLink>
          <NavLink to="/Contact">Contact Us</NavLink>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/Register">Register</NavLink>
        </div>
      </div>
    );
  }
}
