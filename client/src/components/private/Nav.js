import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import MakeProfile from "./MakeProfile.js";

export default function Nav(props) {
  const { newHomeProfile } = props;
  let currentProfile = newHomeProfile;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand " href="/">
            <h1>
              Home Wallet <i className="fas fa-wallet" />
            </h1>
          </a>
          <Dropdown isOpen={props.dropdownOpen} toggle={props.toggleNav}>
            <DropdownToggle caret>Options</DropdownToggle>
            <DropdownMenu>
              {/* <DropdownItem> */}
              <p className="text-center bg-dark text-white">
                {" "}
                Welcome {props.userName}
              </p>
              {/* </DropdownItem> */}
              <DropdownItem>
                <a className="dropdown-item" href="/">
                  <i className="fas fa-home" /> Main
                </a>
              </DropdownItem>
              {/* Calendar removed as it is the default and Documents not working right now */}
              {/*  <DropdownItem>
                  {" "}
                  <a className="dropdown-item" href="/">
                    <i className="far fa-calendar-alt" /> Calendar
                  </a>
                </DropdownItem> */}
              {/* <DropdownItem>
                  <a className="dropdown-item" href="/Documents/">
                    <i className="fas fa-file-pdf" /> Documents
                  </a>
                </DropdownItem> */}
              <DropdownItem>
                <a className="dropdown-item" href="/Repairs/">
                  <i className="fas fa-tools" /> Repairs
                </a>
              </DropdownItem>
              <DropdownItem>
                <a className="dropdown-item" href="/Vendors/">
                  <i className="far fa-address-card" /> Vendors
                </a>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="text-center">
                <a
                  className="btn btn-outline-danger"
                  href="/Login/"
                  onClick={props.handleLogout}
                >
                  <i className="fas fa-sign-out-alt" /> Logout
                </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>

      {props.hasZillow && props.hasHomeProfile ? (
        <div className="container mb-5">
          <div className="card">
            <div>
              <div className="row mt-2">
                <h5 className="mx-auto">
                  <strong>
                    Profile for {currentProfile.streetAddress} <span />
                  </strong>
                </h5>
              </div>
              <div className="row">
                <div className="col-4">
                  <p>
                    <strong>Lot Size:</strong>
                    <span> {currentProfile.lotSize}</span> sf
                    <br />
                    <strong>
                      Tax Assessment for {currentProfile.taxYear}:
                    </strong>
                    <span>${currentProfile.taxAssessment}</span>
                    <br />
                    <strong>Zestimate:</strong> ${currentProfile.zestimate}
                    <br />
                  </p>
                </div>
                <div className="col-4">
                  <p>
                    <strong>Square Footage:</strong> {currentProfile.gla} <br />
                    <strong>Beds:</strong> {currentProfile.bedrooms}
                    <br />
                    <strong>Baths:</strong> {currentProfile.bathrooms}
                    <br />
                    <strong>Year Built: </strong> {currentProfile.yearBuilt}
                    <br />
                  </p>
                </div>

                <div className="col-4">
                  <strong>Parking: </strong> {currentProfile.parking}
                  <br />
                  <strong>Pool: </strong>{" "}
                  {currentProfile.hasPool ? " Yes" : "No"}
                  <br />
                  <strong>Fence: </strong>{" "}
                  {currentProfile.hasFence ? " Yes" : "No"} <br />
                </div>
              </div>
              <div className="row">
                <a
                  href="/"
                  className="btn btn-sm btn-danger mx-auto"
                  onClick={props.handleDeleteProfile}
                >
                  <i className="fas fa-trash-alt" /> Delete Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <Modal
              isOpen={props.profileModal}
              toggle={props.toggleZillowModal}
              className={props.className}
            >
              <ModalHeader className="ml-auto">
                <Button color="danger" onClick={props.toggleZillowModal}>
                  x
                </Button>
              </ModalHeader>
              <ModalBody>
                <MakeProfile
                  hasHomeProfile={props.hasHomeProfile}
                  streetAddress={props.streetAddress}
                  zipCode={props.zipCode}
                  handleZillowCall={props.handleZillowCall}
                  zillowData={props.zillowData}
                  handleInputChange={props.handleInputChange}
                  isError={props.isError}
                  errorMsg={props.errorMsg}
                  onShowMessage={props.onShowMessage}
                />
              </ModalBody>
            </Modal>
          </div>
        </div>
      )}

      <div>
        <div className="container">
          <Modal
            isOpen={props.zillowModal}
            toggle={props.toggleZillowModal}
            className={props.className}
          >
            <ModalHeader className="ml-auto" />
            <ModalBody>
              <div className="container">
                <div className="card">
                  <div className="card-header mb-4 bg-secondary text-white">
                    <h3 className="text-center mt-2 ">
                      <i className="fas fa-home" />
                      &nbsp; Tell us about {props.streetAddress}
                    </h3>
                  </div>
                  <div className="card-body">
                    <h4 className="text-center">
                      Data from{" "}
                      <a
                        href={props.zillowData.zillowLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Zillow
                      </a>
                    </h4>
                    <p>
                      Year Built: {props.zillowData.yearBuilt}
                      <br />
                      Beds: {props.zillowData.bedrooms}
                      <br />
                      Baths: {props.zillowData.bathrooms}
                      <br />
                      Square Footage: {props.zillowData.gla} <br />
                      Lot Size: {props.zillowData.lotSize} sf
                      <br />
                      Tax Assessment for {props.zillowData.taxYear}: $
                      {props.zillowData.taxAssessment}
                      <br />
                      Zestimate Range: ${props.zillowData.zestimateLow} -
                      {props.zillowData.zestimateHigh}
                      <br />
                      Zestimate: ${props.zillowData.zestimate}
                    </p>

                    <form>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-4">
                            <label htmlFor="isVendor">
                              Check if you have a pool?{" "}
                            </label>
                          </div>
                          <div className="col-8">
                            <input
                              value={props.hasPool}
                              type="checkbox"
                              name="hasPool"
                              checked={props.hasPool}
                              onChange={props.handlePoolCheck}
                            />
                          </div>
                          <div className="col-4">
                            <label htmlFor="hasFence">
                              Check if you have a fence?
                            </label>
                          </div>
                          <div className="col-8">
                            <input
                              value={props.hasFence}
                              type="checkbox"
                              name="hasFence"
                              checked={props.hasFence}
                              onChange={props.handleFenceCheck}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-3">
                            <label />
                            Parking
                          </div>
                          <div className="col-8">
                            <select
                              className="form-control"
                              id="parking"
                              value={props.parking}
                              name="parking"
                              onChange={props.handleInputChange}
                            >
                              <option>No Garage</option>
                              <option>1 Car Garage </option>
                              <option>2 Car Garage </option>
                              <option>3+ Car Garage </option>
                              <option>Carport</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="row">
                <div className="col-12">
                  <button
                    className=" btn btn-block btn-success"
                    onClick={props.handleSaveProfile}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}
