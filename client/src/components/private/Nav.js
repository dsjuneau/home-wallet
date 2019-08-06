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

import Profile from "./Profile.js";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      hasHomeProfile: false,
      modal: false,
      modal2: false,
    };
  }
  handleClick = () => {
    document.cookie = `key=;path=/`;
    this.props.unAuth();
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  componentDidMount() {
    if (!this.state.hasHomeProfile) {
      console.log(this.state.hasHomeProfile);
      this.setState({
        modal: true,
      });
    }
  }

  render() {
    // export default function Nav(props) {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand " href="/">
              <h1>
                My Home Wallet <i className="fas fa-wallet" />
              </h1>
            </a>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>Options</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <a className="dropdown-item" href="/">
                    <i className="fas fa-home" /> Main
                  </a>
                </DropdownItem>

                <DropdownItem>
                  {" "}
                  <a className="dropdown-item" href="/">
                    <i className="far fa-calendar-alt" /> Calendar
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a className="dropdown-item" href="/Documents/">
                    <i className="fas fa-file-pdf" /> Documents
                  </a>
                </DropdownItem>
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
                <DropdownItem>
                  <button onClick={this.handleClick}>Logout</button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </nav>
        <div className="container text-center bg-light text-success">
          <h1>Welcome {this.props.userName}</h1>
        </div>
        {this.state.hasHomeProfile ? (
          <p>Profile Data</p>
        ) : (
          <div>
            <div className="container">
              <Modal
                isOpen={!this.props.modal}
                toggle={this.toggle2}
                className={this.props.className}
              >
                <ModalHeader className="ml-auto">
                  <Button color="danger" onClick={this.props.toggle2}>
                    x
                  </Button>
                </ModalHeader>
                <ModalBody>
                  <Profile
                    hasHomeProfile={this.state.hasHomeProfile}
                    streetAddress={this.props.streetAddress}
                    zipCode={this.props.zipCode}
                    handleZillowCall={this.props.handleZillowCall}
                    zillowData={this.props.zillowData}
                    handleInputChange={this.props.handleInputChange}
                  />
                </ModalBody>
                <ModalFooter>
                  {/* <Button color="success" onClick={this.toggle2}>
                    Set Profile
                  </Button>{" "} */}
                </ModalFooter>
              </Modal>
            </div>
          </div>
        )}

        <div>
          <div className="container">
            <Modal
              isOpen={this.props.modal}
              toggle={this.toggle2}
              className={this.props.className}
            >
              <ModalHeader className="ml-auto">
                <Button color="danger" onClick={this.toggle2}>
                  x
                </Button>
              </ModalHeader>
              <ModalBody>
                <Profile
                  hasHomeProfile={this.state.hasHomeProfile}
                  streetAddress={this.props.streetAddress}
                  zipCode={this.props.zipCode}
                  handleZillowCall={this.props.handleZillowCall}
                  zillowData={this.props.zillowData}
                  handleInputChange={this.props.handleInputChange}
                />
              </ModalBody>
              <ModalFooter>
                {/* <Button color="success" onClick={this.toggle2}>
                    Set Profile
                  </Button>{" "} */}
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
