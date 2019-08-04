import React, { Component } from "react";
export default class AddVendor extends Component {
  state = {
    vendorName: "",
    vendorCompany: "",
    vendorPhone: "",
    vendorEmail: "",
    vendorCategory: "",
    hasCategory: false,
    vendorNotes: "",
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
    alert(`Vendor Added`);
    this.setState({
      vendorName: "",
      vendorCompany: "",
      vendorPhone: "",
      vendorEmail: "",
      vendorCategory: "",
      hasCategory: false,
      vendorNotes: "",
    });
  };

  handleNewCategory = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.vendorCategory);
    console.log(this.state.vendorCategory === " Other");
    if (this.state.vendorCategory === " Other") {
      alert("new category needed");
      this.setState({
        hasCategory: true,
      });
    }
  };

  render() {
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
            <div className="card-body mt-2">
              <form>
                <div className="form-group">
                  <label for="vendorName">Vendor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="vendorNameInput"
                    value={this.state.vendorName}
                    name="vendorName"
                    onChange={this.handleInputChange}
                    placeholder="Stanley Steamer"
                  />
                </div>

                <div className="form-group">
                  <label for="vendorCompany">Vendor Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id="vendorCompanyInput"
                    value={this.state.vendorCompany}
                    name="vendorCompany"
                    onChange={this.handleInputChange}
                    placeholder="Achme Company"
                  />
                </div>
                <div className="form-group">
                  <label for="vendorPhone">Vendor Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="vendorPhoneInput"
                    value={this.state.vendorPhone}
                    name="vendorPhone"
                    onChange={this.handleInputChange}
                    placeholder="555-555-5555"
                  />
                </div>
                <div className="form-group">
                  <label for="vendorEmail">Vendor Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="vendorEmailInput"
                    value={this.state.vendorEmail}
                    name="vendorEmail"
                    onChange={this.handleInputChange}
                    placeholder="email@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label for="vendor">Vendor Category</label>
                  <select
                    className="form-control"
                    id="vendorCategory"
                    value={this.state.vendorCategory}
                    name="vendorCategory"
                    onChange={this.handleNewCategory}
                  >
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
                {this.state.hasCategory ? (
                  <div className="form-group">
                    <label for="addCategory">Add Category</label>
                    <input
                      className="form-control"
                      id="addCategory"
                      value={this.state.vendorCategory}
                      name="vendorCategory"
                      onChange={this.handleInputChange}
                      placeholder="Arborist"
                    />
                  </div>
                ) : (
                  <p />
                )}

                <div className="form-group">
                  <label for="vendorNotes">Notes</label>
                  <textarea
                    className="form-control"
                    id="vendorNotes"
                    value={this.state.vendorNotes}
                    name="vendorNotes"
                    onChange={this.handleInputChange}
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
                <button
                  onClick={this.handleFormSubmit}
                  className="btn btn-block btn-info mt-5"
                >
                  Add Vendor
                </button>
              </form>
            </div>
          </div>

          <div className="card pl-5">
            <h4>Vendor: {this.state.vendorName}</h4>
            <p>Company: {this.state.vendorCompany}</p>
            <p>Phone: {this.state.vendorPhone}</p>
            <p>Email: {this.state.vendorEmail}</p>
            <p>Category: {this.state.vendorCategory}</p>
            <p>Notes: {this.state.vendorNotes}</p>
          </div>
        </div>
      </div>
    );
  }
}
