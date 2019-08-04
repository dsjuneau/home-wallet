import React from "react";

export default function AddDocument() {
  return (
    <div>
      <div className="container">
        <div className="card mt-2" />
        <div className="card-header mb-4 bg-secondary text-white">
          <h3 className="text-center mt-4 ">
            <i className="fas fa-file-pdf" /> &nbsp; Add Document
          </h3>
        </div>
        <div className="card-body">
          <div className="text-right">
            <a className="btn btn-info" href="/Documents/">
              Document List
            </a>
          </div>
          <div className="card-body mt-2">
            <form>
              <div className="form-group">
                <label for="Format">Type</label>
                <select className="form-control" id="FormatSelect">
                  <option>Document: pdf</option>
                  <option>Image: jpg</option>
                  <option>Image: png</option>
                </select>
              </div>
              <div className="form-group">
                <label for="document title"> documentTitle</label>
                <input
                  type="text"
                  className="form-control"
                  id="documentTitleInput"
                  placeholder="Appraisal"
                  required
                />
              </div>
              <div className="form-group">
                <label for="docNotes">Additional Notes</label>
                <textarea className="form-control" id="docNotes" rows="3" />
              </div>
              <div className="form-group">
                <label for="docUpload">Upload Document</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="docUpload"
                  />
                  <label className="custom-file-label" for="customFile">
                    Choose file
                  </label>
                </div>
              </div>{" "}
              <button className="btn btn-lg btn-success mt-3">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
