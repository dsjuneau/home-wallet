import React, { Component } from "react";
import { Alert } from "reactstrap";
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
      alert("street address and zip code are required");
    }
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      city: "",
      zipCode: "",
      streetAddress: "",
      state: "",
      hasHomeProfile: true,
    });
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
                  <label>Zip Code </label>
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
                <div>
                  <button
                    className="btn btn-info btn-block"
                    onClick={this.props.handleZillowCall}
                  >
                    Get Records from Zillow
                  </button>
                </div>
                {this.props.isError ? (
                  <Alert
                    className="alert-danger mt-2 text-center"
                    isOpen={this.props.isError}
                  >
                    {this.props.errorMsg}
                  </Alert>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
