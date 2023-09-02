import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default class Login extends Component {
  render() {
    const headerscart = {
      // "access-control-allow-origin": "*",
      // "content-type": "application/json",
      "Access-Control-Allow-Credentials": true,

      "access-control-allow-origin": "*",
      "content-length": 212,
      "content-type": "application/problem+json; charset=utf-8",
      date: "Fri,10 Mar 2023 18:16:14 GMT ",
      " server": "Microsoft-IIS/10.0",
      "x-powered-by": " ASP.NET ",
    };
    const login = () => {
      var e_mail = document.getElementById("email").value;
      var p_assword = document.getElementById("password").value;

      axios
        .post(
          "http://walkerthereal-001-site1.btempurl.com/User/Login",
          {
            email: e_mail,
            password: p_assword,
          },
          { headerscart }
        )
        .then((res) => {
          console.log(res.status);

          if (res.status == 200) {
            console.log(res.data);
            window.location.replace("/");
          }
        });
    };

    return (
      <div className="login">
        <div className="login-box">
          <div className="login-logo">
            <img
              src={require("./images2/dry-skin.png")}
              className="imge-profile"
              alt="jhj"
            />
            <h2 className="logo-word">SKIN DOCTOR</h2>
          </div>
          <h1>Login to Skin Doctor</h1>
          <div className="email">
            <h3>Email</h3>
            <input
              type={"email"}
              id="email"
              className="email-input"
              name="email"
            />
          </div>
          <div className="pass">
            <h3>password</h3>
            <input
              type={"password"}
              id="password"
              className="pass-input"
              name="password"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              return login();
            }}
            className="login-btn"
          >
            Login
          </button>
          <NavLink
            to="/Register"
            style={({ isActive }) => ({
              color: isActive ? "#462a1c" : "#ded5d0",
              fontSize: "20px",
            })}
          >
            sign up
          </NavLink>
        </div>
      </div>
    );
  }
}
