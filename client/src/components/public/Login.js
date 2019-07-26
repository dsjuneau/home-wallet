import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  state = { email: "", password: "" };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    axios.post("/api/auth/login", { email, password }).then(res => {
      console.log(res.data);
      if (res.data.msg === undefined) {
        this.props.auth(res.data.userName, res.data._id);
      }
    });
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
