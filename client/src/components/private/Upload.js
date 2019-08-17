import React from "react";

export default function Upload(props) {
  return (
    <div>
      <div className="container">
        <div className="card">
          {/* <div className="card-header text-center">
          <h3>Upload Document</h3>
          </div> */}
          <div className="card-body">
            <input type="file" onChange={props.singleFileChangedHandler} />
            {/* <p className="mt-3 card-text text-muted text-center">
              pdf, jpg or png only! (max 2MB){" "}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
