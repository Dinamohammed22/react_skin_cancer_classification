import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-big-box-left">
          <div className="contact-box">
            <img
              src={require("./images2/smiley-female-doctor-clinic-front-view.png")}
              className="contact-img"
              alt="jhj"
            />
            <div className="right-contact">
              <h2>Name : dina mohammed</h2>
              <h2>Job : Front-end Devoloper</h2>
            </div>
          </div>
        </div>
        <div className="contact-big-box-right">
          <div className="contact-box-right">
            <img
              src={require("./images2/smiley-female-doctor-clinic-front-view.png")}
              className="contact-img"
              alt="jhj"
            />
            <div className="right-contact">
              <h2>Name : Rania Ahmed</h2>
              <h2>Job : Deep Learning Devoloper</h2>
            </div>
          </div>
        </div>
        <div className="contact-big-box-left">
          <div className="contact-box">
            <img
              src={require("./images2/smiley-female-doctor-clinic-front-view.png")}
              className="contact-img"
              alt="jhj"
            />
            <div className="right-contact">
              <h2>Name : Tasnim Hussein</h2>
              <h2>Job : Ai Devoloper</h2>
            </div>
          </div>
        </div>
        <div className="contact-big-box-right">
          <div className="contact-box-right">
            <img
              src={require("./images2/smiley-female-doctor-clinic-front-view.png")}
              className="contact-img"
              alt="jhj"
            />
            <div className="right-contact">
              <h2>Name : Basmala</h2>
              <h2>Job : Back-end Devoloper</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
