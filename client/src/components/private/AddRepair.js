import React from "react";

export default function Repairs() {
  return (
    <div>
      <div className="container">
        <div className="card mt-2" />
        <div className="card-header mb-4 bg-secondary text-white">
          <h3 className="text-center mt-4 ">
            <i className="fas fa-tools" /> &nbsp;Add Repair
          </h3>
        </div>
        <div className="card-body">
          <div className="text-right">
            <a className="btn btn-info" href="/Repairs/">
              Go to Repair List
            </a>
          </div>
          <br />
          <div className="card-body mt-2">
            <form>
              <div className="form-group">
                <label for="Type">Type</label>
                <select className="form-control" id="TypeSelect">
                  <option>Update</option>
                  <option>Repair</option>
                  <option>Maintenance</option>
                </select>
              </div>

              <div className="form-group">
                <label for="description"> description</label>
                <input
                  type="text"
                  className="form-control"
                  id="descriptionInput"
                  placeholder="mow grass"
                />
              </div>
              <div className="form-group">
                <label for="Cost"> Cost</label>
                <input
                  type="number"
                  className="form-control"
                  id="CostInput"
                  placeholder="$35/wk"
                />
              </div>
              <div className="form-group">
                <label for="priority">Priority</label>
                <select className="form-control" id="statusSelect">
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>

              <div className="form-group">
                <label for="status">Status</label>
                <select className="form-control" id="statusSelect">
                  <option>Thinking about it!</option>
                  <option>Getting Bids</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>

              <div className="form-group">
                <label for="isVendor">Do you use a vendor?</label>
                <select className="form-control" id="isVendorSelect">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="card-header">If there's a vendor</div>
              <div className="form-group">
                <label for="vendor" />
                <select className="form-control" id="vendorSelect">
                  <option>Vendor 1</option>
                  <option>Vendor 2</option>
                </select>
              </div>

              <div className="form-group">
                <label for="otherNotes">Additional Notes/Instruction</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>

              <div className="card-header">If add to calendar</div>
              <div className="form-group">
                <label for="isRecurring">Is this recurring?</label>
                <select className="form-control" id="isRecurringSelect">
                  <option>Yes</option>
                  <option>No, I do this myself</option>
                </select>
              </div>

              {/* // If we can get bids working then we can work on this //
               <div className="form-group">
                <label for="vendor">Add bids/receipts</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label className="custom-file-label" for="customFile">
                    Choose file
                  </label>
                </div>
              </div> */}

              <button className="btn btn-lg btn-success mt-3">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
