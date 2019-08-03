import React from "react";

export default function AddVendor() {
  return (
    <div>
      <div className="container">
        <div className="card mt-2" />
        <div className="card-header mb-4 bg-secondary text-white">
          <h3 className="text-center mt-4 ">
            <i className="far fa-address-card" />
            &nbsp; Add Vendor
          </h3>
        </div>
        <div className="card-body">
          <div className="text-right">
            <a className="btn btn-info" href="/Vendors/">
              Go to Vendor List
            </a>
          </div>
          <br />
          <div className="card-body mt-2">
            <form>
              <div className="form-group">
                <label for="vendorName">Vendor Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="vendorNameInput"
                  placeholder="Stanley Steamer"
                />
              </div>

              <div className="form-group">
                <label for="vendorCompany">Vendor Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="vendorCompanyInput"
                  placeholder="Achme Company"
                />
              </div>
              <div className="form-group">
                <label for="vendorPhone">Vendor Phone</label>
                <input
                  type="phone"
                  className="form-control"
                  id="vendorPhoneInput"
                  placeholder="555-555-5555"
                />
              </div>
              <div className="form-group">
                <label for="vendorEmail">Vendor Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="vendorEmailInput"
                  placeholder="email@gmail.com"
                />
              </div>

              <div className="form-group">
                <label for="vendor">Vendor Category</label>
                <select className="form-control" id="vendorCategory">
                  <option>Plumber</option>
                  <option>Carpet Cleaner</option>
                  <option>House Cleaner </option>
                  <option>Electrician</option>
                  <option>Roofer</option>
                  <option>Real Estate Agent</option>
                  <option>Appraiser</option>
                  <option>Handyman</option>
                  <option>Lawn Care</option>
                  <option>Exterminator</option>
                  <option>Other </option>
                </select>
              </div>
              <div className="form-group">
                <label for="addCategory">Another Category</label>
                <input
                  className="form-control"
                  id="addCategory"
                  placeholder="Arborist"
                />
              </div>
              <div className="form-group">
                <label for="vendorNotes">Notes</label>
                <textarea
                  className="form-control"
                  id="vendorNotes"
                  rows="3"
                  placeholder="Mary has used this company for years and loves them"
                />
              </div>
              {/* <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label" for="customFile">
                  May not make the final Cut!
                </label>
              </div> */}
              <button className="btn btn-block btn-info mt-5">
                Add Vendor
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
