import React, { Component } from "react";
import axios from "axios";

export class Register extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    password2: "",
    isError: false,
    errorMsg: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    //verfication block
    const { userName, email, password, password2 } = this.state;
    if (userName && email && password) {
      if (password === password2 && password.length > 6) {
        let userToSave = {
          userName: this.state.userName,
          email: this.state.email,
          pwd: this.state.password
        };
        axios.post("/api/auth/login", { userToSave }).then(res => {
          console.log(res);
          if (res.data.userExists) {
            this.setState({
              isError: true,
              errorMsg: "User already exists"
            });
          }
        });
      } else {
        this.setState({
          isError: true,
          errorMsg:
            "Passwords need to match and must be at least 7 characters in length"
        });
      }
    } else {
      this.setState({
        isError: true,
        errorMsg: "All fields must be completed"
      });
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
          <label>{this.state.isError ? this.state.errorMsg : ""}</label>
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
