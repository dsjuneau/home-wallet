import React, { Component } from "react";
import axios from "axios";

export class Register extends Component {
  state = { userName: "", email: "", password: "", password2: "" };

  handleSubmit = e => {
    e.preventDefault();
    //verfication block
    const { userName, email, password, password2 } = this.state;
    if (userName && email && password) {
      if (password === password2 && password.length > 6) {
        console.log("passed verification");
      } else {
        console.log("Password does not match");
      }
    } else {
      console.log("something else did not work");
    }
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
            name="userName"
            type="text"
            placeholder="Full Name"
            value={this.state.userName}
          />
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
          <input
            onChange={this.handleChange}
            name="password2"
            type="password"
            placeholder="retype password"
            value={this.state.password2}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
