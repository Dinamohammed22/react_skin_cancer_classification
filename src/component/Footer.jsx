import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="collumn">
          <img
            src={require("./images2/dry-skin.png")}
            className="imge-profile"
            alt="jhj"
          />
          <h3 className="logo-word">SKIN DOCTOR</h3>
        </div>
        <div className="collumn">
          <h3 className="title-collumn">ABOUT US</h3>
          <h4>explore the brand </h4>
          <h4>Careers</h4>
          <h4>Store locatore</h4>
        </div>
        <div className="collumn">
          <h3 className="title-collumn">HELP</h3>
          <h4>FAQs</h4>
          <h4>Orders</h4>
          <h4>Shipping</h4>
        </div>
        <div className="collumn">
          <h3 className="title-collumn">MANAGE</h3>
          <h4>Git Cards </h4>
          <h4>My Account</h4>
          <h4>My Orders</h4>
        </div>
        <div className="collumn">
          <div className="three-logos">
            <a href="https://www.instagram.com/dior/?igshid=YmMyMTA2M2Y%3D">
              <img
                src={require("./images2/instagram.png")}
                className="imge-three-logos"
                alt="jhj"
              />
            </a>
            <a href="https://www.facebook.com/Dior/">
              <img
                src={require("./images2/facebook.png")}
                className="imge-three-logos"
                alt="jhj"
              />
            </a>
            <a href="https://www.instagram.com/dior/?igshid=YmMyMTA2M2Y%3D">
              <img
                src={require("./images2/twitter-sign.png")}
                className="imge-three-logos"
                alt="jhj"
              />
            </a>
          </div>
          <h4>SkinDoctor@gmail.com</h4>
          <h4> St..Assuit. NE..Egypt</h4>
        </div>
      </div>
    );
  }
}
