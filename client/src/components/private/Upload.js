import React from "react";

export default function Upload(props) {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <input type="file" onChange={props.singleFileChangedHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}
