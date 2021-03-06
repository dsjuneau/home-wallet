import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Info from "./Info";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";

export class Public extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Info} />
            <Route
              path="/login/"
              render={() => <Login auth={this.props.auth} />}
            />
            <Route path="/register/" component={Register} />
            <Route path="*" component={Info} />
            <Footer />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Public;
