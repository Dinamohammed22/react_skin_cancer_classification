import React, { Component } from "react";
import axios from "axios";
export default class Register extends Component {
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
    const register = () => {
      var n_ame = document.getElementById("name").value;
      var e_mail = document.getElementById("email").value;
      var p_assword = document.getElementById("password").value;
      var phonenumber = document.getElementById("phonenumber").value;

      if (n_ame > 10) {
        alert("name should be less than 10 digit");
      } else {
        axios
          .post(
            "http://walkerthereal-001-site1.btempurl.com/User/Register",
            {
              name: n_ame,
              phoneNumber: phonenumber,
              email: e_mail,
              password: p_assword,
            },
            { headerscart }
          )
          .then((res) => {
            console.log(res.data);

            if (res.data == "Done") {
              console.log(res);
              window.location.replace("/Login");
            }
          });
      }
    };

    return (
      <div className="register">
        <div className="register-box">
          <div className="register-logo">
            <img
              src={require("./images2/dry-skin.png")}
              className="imge-profile"
              alt="jhj"
            />
            <h2 className="logo-word">SKIN DOCTOR</h2>
          </div>
          <h1>register to Skin Doctor</h1>
          <div className="name">
            <h3>name</h3>
            <input type={"name"} id="name" className="name-input" name="name" />
          </div>
          <div className="phonenumber">
            <h3>phonenumber</h3>
            <input
              type={"phonenumber"}
              id="phonenumber"
              className="phonenumber-input"
              name="phonenumber"
            />
          </div>
          <div className="age">
            <h3>age</h3>
            <input type={"number"} id="age" className="age-input" name="age" />
          </div>

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
              return register();
            }}
            className="register-btn"
          >
            register
          </button>
        </div>
      </div>
    );
  }
}
