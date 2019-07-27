import React from "react";
import Private from "./components/private/Private";
import Public from "./components/public/Public";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { isFromLogin: false, isAuth: false };

  componentWillMount() {
    axios.get("/api/auth").then(response => {
      this.setState({
        isAuth: response.data.isAuth,
        userName: response.data.userName
      });
    });
  }
  unAuth = () => {
    this.setState({ isAuth: false });
  };

  auth = (userName, id) => {
    this.setState({ userName, id, isAuth: true, isFromLogin: true });
  };

  componentDidUpdate() {
    console.log("componentDidUpdate ran");
    if (this.state.isFromLogin) {
      console.log("getting here");
      window.location.assign("/");
      this.setState({ isFromLogin: false });
    }
  }

  render() {
    return !this.state.isAuth ? (
      <Public auth={this.auth} />
    ) : (
      <Private unAuth={this.unAuth} user={this.state} />
    );
  }
}

export default App;
