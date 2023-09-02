import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
export default class Mainpage extends Component {
  render() {
    return (
      <div>
        <div className="Mainpage">
          {/* main container start */}
          <div className="container">
            {/* first section start */}
            <div className="first-section">
              {/* left start */}
              <div className="left">
                <h1>
                  <b>Skin Cancer Detection And Classification</b>
                </h1>
                <p>
                  we will help you to detect whetheir you have skin cancer or
                  not ,and to know it's type
                </p>
                {/* <button className="btn-1">Get started</button> */}
                {/* <input type="file" accept="image/*" capture="camera"></input> */}
                <NavLink to="/Result" className="btn-1">
                  Get Started
                </NavLink>
              </div>
              {/* left end */}

              {/* right start */}

              <img
                src={require("./images2/smiley-female-doctor-clinic-front-view.png")}
                className="mainimg"
                alt="jhj"
              />

              {/* right end */}
            </div>
            {/* first section end*/}

            {/* second section start */}
            <div className="second-section">
              <h2>
                What to know about <b>Skin Cancer</b>
              </h2>
              <div className="all-coll">
                <div className="coll  coll1">
                  <div className="g1">
                    <img
                      src={require("./images2/dry-skin.png")}
                      className="imge-profile"
                      alt="jhj"
                    />
                    <h3>Types of skin Cancer</h3>
                  </div>
                  <p>
                    -There are three major types of skin cancer:
                    <br />
                    <br />
                    1- basal cell carcinoma
                    <br />
                    2-squamous cell carcinoma
                    <br />
                    3-melanoma.
                  </p>
                </div>

                <div className="coll   coll2">
                  <div className="g1">
                    <img
                      src={require("./images2/rash.png")}
                      className="imge-profile"
                      alt="jhj"
                    />
                    <h3>Symptoms</h3>
                  </div>
                  <p>
                    -Symptoms differ from each type but there are the major
                    symptoms:
                    <br />
                    <br />
                    1-A pearly or waxy bump
                    <br />
                    2-A firm, red nodule
                    <br />
                    3-A large brownish spot with darker speckles
                  </p>
                </div>

                <div className="coll   coll3">
                  <div className="g1">
                    <img
                      src={require("./images2/uv-protection.png")}
                      className="imge-profile"
                      alt="jhj"
                    />
                    <h3>Causes</h3>
                  </div>
                  <p>
                    -Skin cancer most often develops on skin exposed to the sun.
                    <br />
                    -But this common form of cancer can also occur on areas of
                    skin not ordinarily exposed to sunlight.
                  </p>
                </div>

                <div className="coll   coll4">
                  <div className="g1">
                    <img
                      src={require("./images2/sun-protection (1).png")}
                      className="imge-profile"
                      alt="jhj"
                    />
                    <h3>protection guide</h3>
                  </div>
                  <p>
                    -You can reduce your risk of skin cancer by:
                    <br />
                    1-limiting exposure to ultraviolet (UV) rays.
                    <br />
                    2-Checking your skin for suspicious changes can help detect
                    skin cancer at its earliest stages.
                  </p>
                </div>
              </div>
              <a
                href="https://www.mayoclinic.org/diseases-conditions/skin-cancer/symptoms-causes/syc-20377605"
                className="link-sec2"
              >
                Read more
              </a>
            </div>
            {/* second section end */}

            {/* third section start */}
            <div className="third-section">
              {/* left third start */}
              <img
                src={require("./images2/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive-patient-with-skin-disease-female-dermatologist-examining-patient-with-dermascope-looking-signs-skin-cancer.png")}
                className="sec-img"
                alt="jhj"
              />
              {/* left third end*/}

              {/* right third start */}
              <div className="right-third">
                <h2>How to use the SKIN DOCTOR TOOL :</h2>
                <p>simple guidline: </p>

                <div className="in-third">
                  <div className="row-third">
                    <img
                      src={require("./images2/number-one.png")}
                      className="num-img"
                      alt="jhj"
                    />

                    <div className="row-line">
                      <h3>Press on Get start</h3>
                      <p>it delivers you to your examination page</p>
                    </div>
                  </div>

                  <div className="row-third">
                    <img
                      src={require("./images2/number-one (1).png")}
                      className="num-img"
                      alt="jhj"
                    />
                    <div className="row-line">
                      <h3>Press on the camera button</h3>
                      <p>Take a picture of the suspicious area</p>
                    </div>
                  </div>

                  <div className="row-third">
                    <img
                      src={require("./images2/number-3.png")}
                      className="num-img"
                      alt="jhj"
                    />
                    <div className="row-line">
                      <h3>write down any other sumptoms</h3>

                      <p>write it in the symptoms area</p>
                    </div>
                  </div>

                  <div className="row-third">
                    <img
                      src={require("./images2/number-one (2).png")}
                      className="num-img"
                      alt="jhj"
                    />
                    <div className="row-line">
                      <h3>Press on the start button</h3>
                      <p>wait for the results to appear in the results area</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* right third end */}
            </div>
            {/* third section end */}

            {/* fourth section start */}
            <div className="fourth-section">
              {/* left fourth start */}
              <div className="left-fourth">
                <h2>By Using Our Tool</h2>
                <p>
                  We are aming to help both patient and doctor to discover skin
                  cancer early and detect it's type. Our hope is to cut down the
                  death rate caused by skin cancer
                </p>
                <p>
                  Our Tool uses modern deep learning detection and
                  classification techniques in addition to neural networks
                  techniques so that it can detect the skin cancer and specifiy
                  it;s type accuratly with avery low error ratio{" "}
                </p>
                <button className="btn-fourth">Read More</button>
              </div>
              {/* left fourth end */}

              {/* right fourth start */}
              <div className="right-fourth">
                <img
                  src={require("./images2/skinvision-app-scanning-dark (1).png")}
                  className="fourth-img"
                  alt="jhj"
                />
              </div>

              {/* right fourth end */}
            </div>
            {/* fourth section end */}

            {/* fifth section start */}
            <div className="fifth-section">
              <h2>What Clients Say</h2>
              {/* one div */}
              <div className="all-coll-fifth">
                {/* collumn 1 start */}
                <div className="coll-fifth  coll-fifth1">
                  <div className="profile-row">
                    <img
                      src={require("./images2/dry-skin.png")}
                      className="imge-profile"
                      alt="jhj"
                    />
                    <div className="profile-names">
                      <h4>user name</h4>
                      <h5>country</h5>
                    </div>
                    <h2>,,</h2>
                  </div>
                  <p>user comment</p>
                </div>
                {/* collumn 1 end */}

                {/* collumn 2 start */}
                <div className="coll-fifth   coll-fifth2">
                  <div className="profile-row">
                    <img
                      src={require("./images2/dry-skin.png")}
                      className="imge-profile"
                      alt="jhj"
                    />
                    <div className="profile-names">
                      <h4>user name</h4>
                      <h5>country</h5>
                    </div>
                    <h2>,,</h2>
                  </div>
                  <p>user comment</p>
                </div>
                {/* collumn 2 end */}

                {/* collumn 3 start */}
                <div className="coll-fifth   coll-fifth3">
                  <div className="profile-row">
                    <img
                      src={require("./images2/dry-skin.png")}
                      className="imge-profile"
                      alt="jhj"
                    />
                    <div className="profile-names">
                      <h4>user name</h4>
                      <h5>country</h5>
                    </div>
                    <h2>,,</h2>
                  </div>
                  <p>user comment</p>
                </div>
                {/* collumn 3 end */}
              </div>
              {/* end all collumns */}

              <div className="third-row-fifth">
                <h2 className="rtg">Ready To Get Started</h2>
                <button className="last-btn">Contact Us</button>
              </div>
            </div>
            {/* fifth section end*/}
          </div>
          {/* main container end */}
        </div>
      </div>
    );
  }
}
