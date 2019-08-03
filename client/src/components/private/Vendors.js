import React from "react";

export default function Vendor() {
  return (
    <div>
      <div className="container">
        <div className="card mt-2" />
        <div className="card-header mb-4 bg-secondary text-white">
          <h3 className="text-center mt-4 ">
            <i className="far fa-address-card" />
            &nbsp; Vendor List
          </h3>
        </div>
        <div className="card-body">
          <div className="text-right">
            <a className="btn btn-info" href="/AddVendor/">
              <i class="fa fa-plus-circle" aria-hidden="true" />
              &nbsp; Add Vendor
            </a>
          </div>
          <br />
          <div className="card mt-2">
            <div className="card-header">Vendor Name</div>
            <div className="container">
              <p>Category: </p>
              <p>Company: </p>
              <p>Phone: </p>
              <p>Email: </p>
              <p>Notes: </p>
            </div>
          </div>
          {/* card */}
          <div className="card mt-2">
            <div className="card-header">Vendor Name</div>
            <div className="container">
              <p>Category: </p>
              <p>Company: </p>
              <p>Phone: </p>
              <p>Email: </p>
              <p>Notes: </p>
            </div>
          </div>
          {/* card */}
          <div className="card mt-2">
            <div className="card-header">Vendor Name</div>
            <div className="container">
              <p>Category: </p>
              <p>Company: </p>
              <p>Phone: </p>
              <p>Email: </p>
              <p>Notes: </p>
            </div>
          </div>
          {/* card */}
        </div>
      </div>
    </div>
  );
}
