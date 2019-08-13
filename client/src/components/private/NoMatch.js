import React from "react";
import funnyImage from "../../images/funny_house.jpg";

export default function NoMatch() {
  return (
    <div className="pt-5">
      <div>
        <div className="container">
          <div className="jumbotron text-center">
            <img className="mb-5" src={funnyImage} alt="upside down house" />
            <h3>You've reached a page that doesn't exist</h3>
            <br />
            <a href="/" className="btn btn-success btn lg">
              {" "}
              Take Me Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
