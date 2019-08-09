import React from "react";

export default function Repairs() {
  return (
    <div>
      <div className="container">
        <div className="card mt-2" />
        <div className="card-header mb-4 bg-secondary text-white">
          <h3 className="text-center mt-4 ">
            <i className="fas fa-tools" /> &nbsp; Updates, Repairs, and
            Maintenance
          </h3>
        </div>
        <div className="card-body">
          <div className="text-right">
            <a className="btn btn-info" href="/AddRepair/">
              <i class="fa fa-plus-circle" aria-hidden="true" /> &nbsp; Add
              Repairs
            </a>
          </div>
          <br />
          <div className="card mt-2">
            <div className="card-header">Repair 1</div>
            <div className="container">
              <p>Type: </p>
              <p>Description: </p>
              <p>Cost: </p>
              <p>Notes: </p>
              <p>Priority: High </p>
              <p>Status: </p>
              <p>Vendor Info: </p>
              <p>Calendar Info: </p>
            </div>
          </div>
          {/* card */}
          <div className="card mt-2">
            <div className="card-header">Repair 2</div>
            <div className="container">
              <p>Type: </p>
              <p>Description: </p>
              <p>Cost: </p>
              <p>Notes: </p>
              <p>Priority: High </p>
              <p>Status: </p>
              <p>Vendor Info: </p>
              <p>Calendar Info: </p>
            </div>
          </div>
          {/* card */}
          <div className="card mt-2">
            <div className="card-header">Repair 3</div>
            <div className="container">
              <p>Type: </p>
              <p>Description: </p>
              <p>Cost: </p>
              <p>Notes: </p>
              <p>Priority: High </p>
              <p>Status: </p>
              <p>Vendor Info: </p>
              <p>Calendar Info: </p>
            </div>
          </div>
          {/* card */}
        </div>
      </div>
    </div>
  );
}
