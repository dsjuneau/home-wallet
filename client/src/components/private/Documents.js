import React from "react";

export default function Documents() {
  return (
    <div>
      <div className="container">
        <div className="card mt-2" />
        <div className="card-header mb-4 bg-secondary text-white">
          <h3 className="text-center mt-4 ">
            <i className="fas fa-file-pdf" /> &nbsp; Document List
          </h3>
        </div>
        <div className="card-body">
          <div className="text-right">
            <a className="btn btn-info" href="#">
              <i class="fa fa-plus-circle" aria-hidden="true" />
              &nbsp; Add Document
            </a>
          </div>
          <br />
          <div className="card mt-2">
            <div className="card-header">Document Name</div>
            <div className="container">
              <ul>
                <li>Doc 1</li>
                <li>Doc 2</li>
                <li>Doc 3</li>
              </ul>
            </div>
          </div>
          {/* card */}
        </div>
      </div>
    </div>
  );
}
