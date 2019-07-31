import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  state = { email: "", password: "", isError: false };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isError: false });
    const { email, password } = this.state;
    axios.post("/api/auth/login", { email, password }).then(res => {
      console.log(res.data);
      if (res.data.msg === undefined) {
        document.cookie = `key=${res.data.key};path=/;max-age=3600`;
        this.props.auth(res.data.userName, res.data._id);
      } else {
        this.setState({ isError: true, errorMsg: res.data.msg });
      }
    });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleClick = () => {
    axios.post("/api/auth/reset", { email: this.state.email });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>{this.state.isError ? this.state.errorMsg : ""}</label>
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
        <button onClick={this.handleClick}>Reset Password</button>
      </div>
    );
  }
}

export default Login;
