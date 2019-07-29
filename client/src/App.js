import React from "react";
import Private from "./components/private/Private";
import Public from "./components/public/Public";

import "./App.css";

class App extends React.Component {
  state = { isAuth: false };

  unAuth = () => {
    this.setState({ isAuth: false });
  };

  auth = (userName, id) => {
    this.setState({ userName, id, isAuth: true });
  };

  render() {
    return !this.state.isAuth ? (
      <Public auth={this.auth} />
    ) : (
      <Private unAuth={this.unAuth} user={this.state} />
    );
  }
}

export default App;
