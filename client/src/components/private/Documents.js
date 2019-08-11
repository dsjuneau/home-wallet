import React from "react";

export default function Documents(props) {
  // console.log(this.props);
  console.log(props);

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
            <a className="btn btn-info" href="/AddDocument/">
              <i className="fa fa-plus-circle" aria-hidden="true" />
              &nbsp; Add Document
            </a>
          </div>
          <div>
            <input type="file" onChange={e => props.showFile(e)} />
          </div>
          <br />
          <div className="card mt-2">
            <div className="card-header">Document List</div>
            <div className="container">
              <ul>
                <li>Doc 1</li>
              </ul>
            </div>
          </div>
          {/* card */}
        </div>
      </div>
    </div>
  );
}
