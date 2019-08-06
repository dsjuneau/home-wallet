import React, { Component } from "react";
import axios from "axios";

export default class Profile extends Component {
  handleZillowCall = event => {
    event.preventDefault();
    const { zipCode, streetAddress } = this.props;
    if (zipCode && streetAddress) {
      console.log("got zip and street");

      axios
        .get(`/api/zillow/${streetAddress}/${zipCode}`)
        .then(function(req, response) {
          console.log(req);
          console.log(response);
        });
    } else {
      alert("Please enter the full address with zip code");
    }
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    //need to set up a Route and Profile Schema to post once completed.  Then on load get that data once set up.???

    // Alert that the profile has been created, set hasProfile to True
    alert(`Profile Created`);
    this.setState({
      // city: "",
      // state: "",
      // zip: "",
      // hasPool: false,
      // hasFence: false,
      hasHomeProfile: true,
    });
    // window.location = "/";
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="card mt-2" />
          <div className="card-header mb-4 bg-secondary text-white">
            <h3 className="text-center mt-4 ">
              <i className="fas fa-home" />
              &nbsp; Enter your Address
            </h3>
          </div>
          <div className="card-body">
            <div className="card-body mt-2">
              <form>
                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="addressInput"
                    value={this.props.streetAddress}
                    name="streetAddress"
                    onChange={this.props.handleInputChange}
                    placeholder="123 Main St"
                  />
                </div>
                {/* Street Address */}
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cityInput"
                    value={this.props.city}
                    name="city"
                    onChange={this.props.handleInputChange}
                    placeholder="Dallas"
                  />
                </div>
                {/* City */}
                <div className="form-group">
                  <label />
                  State
                  <select
                    className="form-control"
                    id="state"
                    value={this.props.state}
                    name="state"
                    onChange={this.props.handleInputChange}
                  >
                    <option>TX </option>
                    <option>OK </option>
                    <option>MI </option>
                  </select>
                </div>
                {/* State */}
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="number"
                    className="form-control"
                    id="zipInput"
                    value={this.props.zipCode}
                    name="zipCode"
                    onChange={this.props.handleInputChange}
                    placeholder="12345"
                  />
                </div>
                {/* Zip Code */}
                {this.props.hasCategory ? (
                  <div className="form-group">
                    <label>Add Category</label>
                    <input
                      className="form-control"
                      id="addCategory"
                      value={this.state.vendorCategory}
                      name="vendorCategory"
                      onChange={this.props.handleInputChange}
                      placeholder="Arborist"
                    />
                  </div>
                ) : (
                  <p />
                )}
                <div>
                  <button
                    className="btn btn-info btn-block"
                    onClick={this.props.handleZillowCall}
                  >
                    Get Records from Zillow
                  </button>
                </div>
                {/* <div className="form-group">
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
                </div> */}
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
                {/* <div className="container">
                  <div className="card">
                    <div className="card-header pl-5 text-center">
                      <h4>Address Details: {this.props.address}</h4>
                      <div className="card">
                        Results Go Here
                        <p>{this.props.streetAddress}</p>
                        <p>{this.props.zillowData.zestimate}</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
