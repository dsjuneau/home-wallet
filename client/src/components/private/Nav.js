import React from "react";
import { Link } from "react-router-dom";
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
import Profile from "./Profile.js";

export default function Nav(props) {
  const { newHomeProfile } = props;
  let currentProfile = newHomeProfile;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link to="/" className="navbar-brand ">
            <h1>
              Home Wallet <i className="fas fa-wallet" />
            </h1>
          </Link>
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
                <Link to="/" className="dropdown-item">
                  <i className="fas fa-home" /> Main
                </Link>
              </DropdownItem>
              {/* Calendar option removed as it is the default and Documents are  not working right now */}
              {/*  <DropdownItem>
                  {" "}
                  <Link className="dropdown-item" href="/">
                    <i className="far fa-calendar-alt" /> Calendar
                  </Link>
                </DropdownItem> */}
              <DropdownItem>
                <Link to="/Documents/" className="dropdown-item">
                  <i className="fas fa-file-pdf" /> Documents
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/Repairs/" className="dropdown-item">
                  <i className="fas fa-tools" /> Repairs
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/Vendors/" className="dropdown-item">
                  <i className="far fa-address-card" /> Vendors
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="text-center">
                <Link
                  to="/Login/"
                  // className="btn btn-outline-danger"
                  // onClick={props.handleLogout}
                >
                  <i className="fas fa-sign-out-alt" /> Logout
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>

      {props.hasZillow && props.hasHomeProfile ? (
        <div>
          <Profile
            streetAddress={currentProfile.streetAddress}
            lotSize={currentProfile.lotSize}
            taxYear={currentProfile.taxYear}
            taxAssessment={currentProfile.taxAssessment}
            zestimate={currentProfile.zestimate}
            gla={currentProfile.gla}
            bedrooms={currentProfile.bedrooms}
            bathrooms={currentProfile.bathrooms}
            yearBuilt={currentProfile.yearBuilt}
            parking={currentProfile.parking}
            hasPool={currentProfile.hasPool}
            hasFence={currentProfile.hasFence}
            handleDeleteProfile={props.handleDeleteProfile}
            isProfileOpen={props.isProfileOpen}
            showProfile={props.showProfile}
          />
          {/* <Upload /> */}
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
            toggle={props.toggle2}
            className={props.className}
          >
            <ModalHeader className="ml-auto" />
            <ModalBody>
              <div className="container">
                <div className="card">
                  <div className="card-header  bg-secondary text-white">
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
                    <div className="row mt-3">
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="yearBuilt"> Year Built:</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          id="yearBuilt"
                          defaultValue={props.zillowData.yearBuilt}
                          name="yearBuilt"
                          onChange={props.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="bedrooms"> Bedrooms:</label>
                        </div>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          id="bedrooms"
                          defaultValue={props.zillowData.bedrooms}
                          name="bedrooms"
                          onChange={props.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="bathrooms"> Bathrooms:</label>
                        </div>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          id="bathrooms"
                          defaultValue={props.zillowData.bathrooms}
                          name="bathrooms"
                          onChange={props.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="gla"> Square Footage:</label>
                        </div>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          id="gla"
                          defaultValue={props.zillowData.gla}
                          name="gla"
                          onChange={props.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="form-group">
                          <label htmlFor="lotSize"> Lot Size:</label>
                        </div>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          id="lotSize"
                          defaultValue={props.zillowData.lotSize}
                          name="lotSize"
                          onChange={props.handleInputChange}
                        />
                      </div>
                    </div>

                    <form>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-4">
                            <label htmlFor="isVendor">
                              Check if you have a pool?{" "}
                            </label>
                          </div>
                          <div className="col">
                            <input
                              value={props.hasPool}
                              type="checkbox"
                              name="hasPool"
                              checked={props.hasPool}
                              onChange={props.handlePoolCheck}
                            />
                          </div>{" "}
                        </div>
                        <div className="row">
                          <div className="col-4">
                            <label htmlFor="hasFence">
                              Check if you have a fence?
                            </label>
                          </div>
                          <div className="col-4">
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
                          <div className="col-4">
                            <label />
                            Parking
                          </div>
                          <div className="col">
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
