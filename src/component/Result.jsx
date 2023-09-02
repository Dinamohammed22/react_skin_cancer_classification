import React from "react";
import "./App.css";
function Result() {
  // var inputpic = document.getElementById("inputpic")[0].value;
  // console.log(inputpic);
  function trackChange(e) {
    console.log(e.target.files[0]);
  }
  // let formdata = new FormData("form");
  // console.log(formdata);

  return (
    <div className="result">
      <div className="container-res">
        <h1 className="result-title">Get Started Page</h1>
        <div className="bottom-result">
          <div className="input-photo-sec">
            <h3>input your skin photo </h3>
            <form id="form">
              <input
                type="file"
                accept="image/*"
                capture="camera"
                className="input-output"
                id="inputpic"
                onChange={trackChange}
              ></input>
            </form>
          </div>
          <div className="result-sec">
            <h3>The results</h3>
            <p className="input-output">You Don't have skin cancer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
