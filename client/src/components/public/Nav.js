import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  render() {
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
                  <a className="dropdown-item" href="/Login/">
                    <i className="fas fa-user-circle" /> Login
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a className="dropdown-item" href="/Register/">
                    <i className="fas fa-user-cog" /> Register
                  </a>
                  {/* Action (disabled) */}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="fas fa-home" /> Home Profile - Disabled
                  </a>
                </DropdownItem>
                <DropdownItem disabled>
                  {" "}
                  <a className="dropdown-item" href="#">
                    <i className="far fa-calendar-alt" /> Calendar - Disabled
                  </a>
                </DropdownItem>
                <DropdownItem disabled>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-file-pdf" /> Documents - Disabled
                  </a>
                </DropdownItem>
                <DropdownItem disabled>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-tools" /> Repairs - Disabled
                  </a>
                </DropdownItem>
                <DropdownItem disabled>
                  <a className="dropdown-item" href="#">
                    <i className="far fa-address-card" /> Vendors - Disabled
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </nav>
      </div>
    );
  }
}
