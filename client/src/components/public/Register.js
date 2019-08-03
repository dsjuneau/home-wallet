import React, { Component } from "react";
import axios from "axios";

export class Register extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    password2: "",
    isError: false,
    errorMsg: "",
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isError: false });
    //verfication block
    const { userName, email, password, password2 } = this.state;
    if (userName && email && password) {
      if (password === password2 && password.length > 6) {
        let userToSave = {
          userName,
          email,
          pwd: password,
        };
        axios.post("/api/auth/register", { userToSave }).then(res => {
          if (res.data.userExists) {
            this.setState({
              isError: true,
              errorMsg: "User already exists",
            });
          } else {
            window.location.assign("/login");
          }
        });
      } else {
        this.setState({
          isError: true,
          errorMsg:
            "Passwords need to match and must be at least 7 characters in length",
        });
      }
    } else {
      this.setState({
        isError: true,
        errorMsg: "All fields must be completed",
      });
    }
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="card">
            <div className="card-header mb-4 bg-secondary text-white">
              <h3 className="text-center mt-4 ">
                <i class="fas fa-user-cog" /> Get started with your free account
              </h3>
            </div>
            <form className="mx-auto" onSubmit={this.handleSubmit}>
              <div className="form-group input-group">
                <label>{this.state.isError ? this.state.errorMsg : ""}</label>
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user-check" />
                  </span>
                </div>
                <input
                  onChange={this.handleChange}
                  name="userName"
                  type="text"
                  placeholder=" full name"
                  value={this.state.userName}
                />
              </div>
              <div className="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-envelope" />
                  </span>
                </div>
                <input
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  placeholder=" e-mail"
                  value={this.state.email}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock" />
                  </span>
                </div>
                <input
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  placeholder=" password"
                  value={this.state.password}
                />
              </div>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock" />
                  </span>
                </div>
                <input
                  onChange={this.handleChange}
                  name="password2"
                  type="password"
                  placeholder=" retype password"
                  value={this.state.password2}
                />
              </div>
              <button className="btn btn-success mb-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
