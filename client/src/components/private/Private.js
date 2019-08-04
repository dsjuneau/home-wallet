import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Calendar from "./Calendar";
import Page2 from "./Page2";
// import Page3 from "./Page3";
import Footer from "./Footer";

export class Private extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav userName={this.props.user.userName} unAuth={this.props.unAuth} />
          <Route path={["/", "/login"]} exact component={Calendar} />

          <Route path="/page2/" component={Page2} />
      {/*     <Route path="/page3/" component={Page3} /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Private;
