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
import axios from "axios";

export class Private extends Component {
  constructor(props) {
    super(props);
    this.toggle2 = this.toggle2.bind(this);

    this.state = {
      zillowData: {},
      streetAddress: "",
      zipCode: "",
      hasPool: false,
      hasFence: false,
      parking: "",
      modal2: false,
      currentHomeProfile: {}
    };
  }

  componentDidMount() {
    axios.get("/api/home").then(res => {
      if (res.data.length > 0) {
        this.setState({
          hasHomeProfile: true,
          hasZillow: true,
          modal: false
        });
      } else {
        this.setState({
          modal: true
        });
      }
    });
  }

  handleSaveProfile = event => {
    event.preventDefault();
    const {
      zillowData,
      streetAddress,
      zipCode,
      hasPool,
      hasFence,
      parking,
      city,
      hasHomeProfile,
      hasZillow
    } = this.state;

    let homeProfile = {
      userId: this.props.user.id,
      hasHomeProfile,
      hasZillow,
      streetAddress,
      city,
      zipCode,
      hasPool,
      hasFence,
      parking,
      yearBuilt: zillowData.yearBuilt,
      bedrooms: zillowData.bedrooms,
      bathrooms: zillowData.bathrooms,
      gla: zillowData.gla,
      lotSize: zillowData.lotSize,
      taxAssessment: zillowData.taxAssessment,
      taxYear: zillowData.taxYear,
      zestimate: zillowData.zestimate,
      zestimateHigh: zillowData.zestimateHigh,
      zeistimateLow: zillowData.zeistimateLow,
      zillowLink: zillowData.zillowLink
    };

    axios
      .post("/api/home", { homeProfile })
      // .then(alert("home profile created"))
      .then(
        this.setState({
          currentHomeProfile: homeProfile
        })
      )
      .then(
        this.setState({
          hasHomeProfile: true,
          modal2: false
        })
      )
      .catch(function(error) {
        if (error) {
          console.log(error);
        }
      });
  };

  handleDeleteProfile = event => {
    event.preventDefault();

    axios
      .delete(`/api/home/${this.props.user.id}`)
      .then(console.log("home profile deleted"))
      .then(
        this.setState({
          hasHomeProfile: false,
          hasZillow: false
        })
      )
      .then((window.location = "/"))
      .catch(function(error) {
        if (error) {
          console.log(error);
        }
      });
  };

  handleZillowCall = event => {
    event.preventDefault();
    const { zipCode, streetAddress } = this.state;
    if (zipCode && streetAddress) {
      axios.get(`/api/zillow/${streetAddress}/${zipCode}`).then(response => {
        console.log(response);

        this.setState({
          zillowData: response.data,
          hasZillow: true,
          modal: false,
          modal2: true
        });
      });
    } else {
      alert("Please enter the full address with zip code");
    }
  };

  toggle2() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handlePoolCheck = () => {
    this.setState({ hasPool: !this.state.hasPool });
  };

  handleFenceCheck = () => {
    this.setState({ hasFence: !this.state.hasFence });
  };

  render() {
    return (
      <div>
        <Nav
          userName={this.props.user.userName}
          userId={this.props.user.id}
          unAuth={this.props.unAuth}
          streetAddress={this.state.streetAddress}
          zipCode={this.state.zipCode}
          handleZillowCall={this.handleZillowCall}
          handleSaveProfile={this.handleSaveProfile}
          handleDeleteProfile={this.handleDeleteProfile}
          handleFenceCheck={this.handleFenceCheck}
          handlePoolCheck={this.handlePoolCheck}
          handleInputChange={this.handleInputChange}
          toggle2={this.toggle2}
          hasHomeProfile={this.state.hasHomeProfile}
          HomeProfile={this.state.currentHomeProfile}
          hasZillow={this.state.hasZillow}
          zillowData={this.state.zillowData}
          modal={this.state.modal}
          modal2={this.state.modal2}
          hasPool={this.state.hasPool}
          hasFence={this.state.hasFence}
          parking={this.state.parking}
        />
        <Router>
          <Route
            path={["/", "/login"]}
            exact
            render={() => <Calendar userId={this.props.user.id} />}
          />

          <Route
            path="/Vendors/"
            render={props => <Vendors {...props} userId={this.props.user.id} />}
          />
          <Route
            userId={this.props.user.id}
            path="/Repairs/"
            component={Repairs}
          />
          <Route
            userId={this.props.user.id}
            path="/Documents/"
            component={Documents}
          />
          <Route
            path="/AddVendor/"
            render={props => (
              <AddVendor {...props} userId={this.props.user.id} />
            )}
          />
          <Route
            userId={this.props.user.id}
            path="/AddRepair/"
            component={AddRepair}
          />
          <Route
            path="/AddDocument/"
            render={props => (
              <AddDocument {...props} userId={this.props.user.id} />
            )}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Private;
