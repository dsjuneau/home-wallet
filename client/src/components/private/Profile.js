import React from "react";

export default function Profile(props) {
  return (
    <div>
      {props.isProfileOpen ? (
        <div className="container mb-5">
          <div className="card">
            <div>
              <div className="row mt-2">
                <div className="col text-center">
                  <h5 className="mx-auto">
                    <strong>
                      Profile for {props.streetAddress} <span />
                    </strong>
                  </h5>
                </div>
                <div className="col-1">
                  <div className="container">
                    <button
                      className="btn btn-light"
                      onClick={props.showProfile}
                    >
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <p>
                    <strong>Lot Size:</strong>
                    <span> {props.lotSize}</span> sf
                    <br />
                    <strong>Tax Assessment for {props.taxYear}:</strong>
                    <span>${props.taxAssessment}</span>
                    <br />
                    <strong>Zestimate:</strong> ${props.zestimate}
                    <br />
                  </p>
                </div>
                <div className="col-4">
                  <p>
                    <strong>Square Footage:</strong> {props.gla} <br />
                    <strong>Beds:</strong> {props.bedrooms}
                    <br />
                    <strong>Baths:</strong> {props.bathrooms}
                    <br />
                    <strong>Year Built: </strong> {props.yearBuilt}
                    <br />
                  </p>
                </div>

                <div className="col-4">
                  <strong>Parking: </strong> {props.parking}
                  <br />
                  <strong>Pool: </strong> {props.hasPool ? " Yes" : "No"}
                  <br />
                  <strong>Fence: </strong> {props.hasFence ? " Yes" : "No"}{" "}
                  <br />
                </div>
              </div>
              <div className="row">
                <a
                  href="/"
                  className="btn btn-sm btn-danger mx-auto"
                  onClick={props.handleDeleteProfile}
                >
                  <i className="fas fa-trash-alt" /> Delete Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="container">
            <div className="col-1 float-right">
              <button
                className="btn btn-light ml-4"
                onClick={props.showProfile}
              >
                <i className="fas fa-plus" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
