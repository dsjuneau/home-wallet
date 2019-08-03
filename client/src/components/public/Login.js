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
      [name]: value,
    });
  };

  handleClick = () => {
    axios.post("/api/auth/reset", { email: this.state.email });
  };
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="card ">
            <div className="card-header mb-4 bg-secondary text-white">
              <h3 className="text-center mt-4 ">
                {" "}
                <i class="fas fa-user-circle" /> Login
              </h3>
            </div>
            <form className="mx-auto" onSubmit={this.handleSubmit}>
              <div className="form-group input-group">
                <label>{this.state.isError ? this.state.errorMsg : ""}</label>
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
                <input
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  placeholder="e-mail"
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
                  placeholder="password"
                  value={this.state.password}
                />
              </div>
              <button className="btn btn-success">Submit</button>
            </form>

            <div className="form-group text-center mt-5">
              <a href="/Register/">Create an Account</a>
              <br />
              <a href="#" className="ForgetPwd" onClick={this.handleClick}>
                Forget Your Password ?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
