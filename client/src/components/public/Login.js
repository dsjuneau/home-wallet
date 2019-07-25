import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  state = { email: "", password: "" };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="e-mail"
            value={this.state.email}
          />
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
