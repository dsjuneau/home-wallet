import React from "react";
import axios from "axios";
import { Alert } from "reactstrap";

export default class Vendors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: {},
      visible: false,
    };
  }
  componentDidMount() {
    axios
      .get("/api/vendors")
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            vendors: res.data,
          });
        } else {
          console.log("No Vendors Found");
        }
      })
      .then(console.log(this.state.vendors))
      .catch(function(error) {
        console.log(error);
      });
  }

  deleteVendor = id => {
    axios
      .delete("../api/vendors/" + id)
      .then(this.onShowAlert())
      .then((window.location = "/Vendors/"))
      .catch(err => console.log(err));
  };

  onShowAlert = () => {
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
      }, 4000);
    });
  };
  render() {
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
            <Alert className="alert-danger mt-2" isOpen={this.state.visible}>
              Vendor deleted!
            </Alert>
            {/* Vendor Card Starts Here */}
            {this.state.vendors.length ? (
              <div className="card mt-2">
                {this.state.vendors.map(vendor => (
                  <div>
                    <div
                      className="card mx-auto mt-2"
                      style={{ width: "80%", border: "solid lightGrey" }}
                    >
                      <div className="card-header text-center">
                        <h3>
                          {vendor.vendorName}{" "}
                          <button
                            className="btn btn-outline-secondary float-right"
                            id={vendor._id}
                            onClick={() => this.deleteVendor(vendor._id)}
                          >
                            <i class="fas fa-trash-alt" />
                          </button>
                        </h3>
                      </div>
                      <div className="container">
                        <p>
                          {" "}
                          <strong>Company: </strong>{" "}
                          <span>{vendor.vendorCompany}</span>
                        </p>
                        <p>
                          {" "}
                          <strong>Phone:</strong>{" "}
                          <span>{vendor.vendorPhone}</span>
                        </p>
                        <p>
                          {" "}
                          <strong>Email:</strong>{" "}
                          <span>{vendor.vendorEmail}</span>
                        </p>
                        <p>
                          {" "}
                          <strong>Notes:</strong>{" "}
                          <span>{vendor.vendorNotes}</span>
                        </p>
                        <p>
                          {" "}
                          <strong>Category: </strong>{" "}
                          <span>{vendor.vendorCategory}</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}{" "}
              </div>
            ) : (
              <h5 className="text-center mt-5">
                No Vendors have been added. Please click the "Add Vendor Button"
              </h5>
            )}
          </div>
        </div>
      </div>
    );
  }
}
