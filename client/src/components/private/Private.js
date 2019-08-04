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

export class Private extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav userName={this.props.user.userName} unAuth={this.props.unAuth} />
          <Route path={["/", "/login"]} exact component={Calendar} />
          <Route path="/Vendors/" component={Vendors} />
          <Route path="/Repairs/" component={Repairs} />
          <Route path="/Documents/" component={Documents} />
          <Route path="/AddVendor/" component={AddVendor} />
          <Route path="/AddRepair/" component={AddRepair} />
          <Route path="/AddDocument/" component={AddDocument} />
          <Route
            path="/Profile/"
            render={() => <Profile handleZillowCall={this.handleZillowCall} />}
          />

          {/* //   <Route
        //    path="/search/"
        //    render={() => <Search handleEmit={this.handleEmit} />}
        //  /> */}

          <Footer />
        </div>
      </Router>
    );
  }
}

export default Private;
