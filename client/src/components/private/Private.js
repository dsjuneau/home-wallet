import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Calendar from "./Calendar";
import Footer from "./Footer";
import Vendors from "./Vendors";
import Repairs from "./Repairs";
import Documents from "./Documents";
import AddVendor from "./AddVendor";
import AddRepair from "./AddRepair";
import AddDocument from "./AddDocument";
import Profile from "./Profile";
import axios from "axios";

export class Private extends Component {
  constructor(props) {
    super(props);
    this.toggle2 = this.toggle2.bind(this);

    this.state = {
      zillowData: {},
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      yearbuilt: "",
      hasPool: false,
      hasFence: false,
      hasProfile: false,
      modal: false,
      modal2: false,
    };
  }
  handleZillowCall = event => {
    event.preventDefault();
    const { zipCode, streetAddress } = this.state;
    if (zipCode && streetAddress) {
      console.log("got zip and street");

      axios.get(`/api/zillow/${streetAddress}/${zipCode}`).then(response => {
        // console.log(req);
        console.log(response);

        this.setState({
          zillowData: response.data,
          modal: true,
        });
      });
    } else {
      alert("Please enter the full address with zip code");
    }
  };

  toggle2() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <Nav
          userName={this.props.user.userName}
          unAuth={this.props.unAuth}
          streetAddress={this.state.streetAddress}
          zipCode={this.state.zipCode}
          handleZillowCall={this.handleZillowCall}
          hasProfile={this.state.hasProfile}
          zillowData={this.state.zillowData}
          handleInputChange={this.handleInputChange}
          modal={this.state.modal}
          modal2={this.state.modal2}
        />
        <Router>
          <Route path={["/", "/login"]} exact component={Calendar} />
          <Route path="/Vendors/" component={Vendors} />
          <Route path="/Repairs/" component={Repairs} />
          <Route path="/Documents/" component={Documents} />
          <Route path="/AddVendor/" component={AddVendor} />
          <Route path="/AddRepair/" component={AddRepair} />
          <Route path="/AddDocument/" component={AddDocument} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Private;
