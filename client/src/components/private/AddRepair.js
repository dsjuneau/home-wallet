import React, { Component } from "react";

export default class Repairs extends Component {
  state = {
    repairType: "",
    repairDescription: "",
    repairCost: "",
    repairPriority: "",
    repairStatus: "",
    isVendor: false,
    repairVendor: "",
    repairNotes: "",
    // isRecurring: false,
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`${this.state.repairType} Added`);
    this.setState({
      repairType: "Repair",
      repairDescription: "",
      repairCost: "",
      repairPriority: "",
      repairStatus: "",
      isVendor: false,
      repairVendor: "",
      repairNotes: "",
      isRecurring: false,
    });
  };

  handleCheck = () => {
    this.setState({ isVendor: !this.state.isVendor });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="card mt-2" />
          <div className="card-header mb-4 bg-secondary text-white">
            <h3 className="text-center mt-4 ">
              <i className="fas fa-tools" /> Add Repair
            </h3>
          </div>
          <div className="card-body">
            <div className="text-right">
              <a className="btn btn-info" href="/Repairs/">
                Go to Repair List
              </a>
            </div>
            <div className="card-body mt-2">
              <form>
                <div className="form-group">
                  <label for="repairType">Type</label>
                  <select
                    className="form-control"
                    id="repairTypeSelect"
                    value={this.state.repairType}
                    name="repairType"
                    onChange={this.handleInputChange}
                  >
                    <option>Update</option>
                    <option>Repair</option>
                    <option>Maintenance</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="repairDescription"> repair Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="repairDescriptionInput"
                    placeholder="mow grass"
                    value={this.state.repairDescription}
                    name="repairDescription"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label for="repairCost"> Repair Cost</label>
                  <input
                    type="number"
                    className="form-control"
                    id="repairCostInput"
                    placeholder="$35/wk"
                    value={this.state.repairCost}
                    name="repairCost"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label for="repairPriority">Repair Priority</label>
                  <select
                    className="form-control"
                    id="repairPrioritySelect"
                    value={this.state.repairPriority}
                    name="repairPriority"
                    onChange={this.handleInputChange}
                  >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="repairStatus">Repair Status</label>
                  <select
                    className="form-control"
                    id="repairStatusSelect"
                    value={this.state.repairStatus}
                    name="repairStatus"
                    onChange={this.handleInputChange}
                  >
                    <option>Thinking about it!</option>
                    <option>Getting Bids</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label for="isVendor">Assign a Contractor/Vendor? </label>
                    </div>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        checked={this.state.isVendor}
                        onChange={this.handleCheck}
                      />
                    </div>
                  </div>
                </div>

                {this.state.isVendor ? (
                  <div className="form-group">
                    <label for="repairVendor" />
                    <select
                      className="form-control"
                      id="repairVendorSelect"
                      value={this.state.repairVendor}
                      name="repairVendor"
                      onChange={this.handleInputChange}
                    >
                      <option>Vendor 1</option>
                      <option>Vendor 2</option>
                    </select>
                  </div>
                ) : (
                  <p />
                )}

                <div className="form-group">
                  <label for="repairNotes">Additional Notes/Instruction</label>
                  <textarea
                    className="form-control"
                    id="repairNotesInput"
                    rows="3"
                    value={this.state.repairNotes}
                    name="repairNotes"
                    onChange={this.handleInputChange}
                  />
                </div>

                {/* // If we can get calendar then we can work on this                 <div className="form-group">
                  <label for="isRecurring">Is this recurring?</label>
                  <select
                    className="form-control"
                    id="isRecurringSelect"
                    value={this.state.isRecurring}
                    name="isRecurring"
                    onChange={this.handleInputChange}
                  >
                    <option>Yes</option>
                    <option>No, I do this myself</option>
                  </select>
                </div> */}

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

                <button
                  onClick={this.handleFormSubmit}
                  className="btn btn-block btn-success mt-3"
                >
                  Add {this.state.repairType}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
