import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./signIn.scss";
import topdeals from "../../../public/images/topdeals.jpeg";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  onTextHandler(e) {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signIn() {
    if (!!this.state.email.length > 6 && !!this.state.password.length > 4) {
      alert("Username and/or Password Invalid");
    }
    this.props.history.push("/individualVendorLanding");
  }

  buyerRegistration() {
    this.props.history.push("/buyerregistration");
  }

  render() {
    console.log(this.props);
    return (
      <div className="container" id="signInBuyer_container">
        <div
          className="row col-xs-12 col-sm-6 col-md-6 justify-content-center align-items-center"
          id="signInBuyer_login"
        >
          <h1 className="signInBuyer_header">SIGN IN</h1>
          <p>If you have an account with us, please log in.</p>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="card">
              <div className="card-body">
                <form action="" autoComplete="off">
                  <div className="form-group">
                    <p>Email Address</p>
                    <input
                      type="text"
                      className="form-control signInBuyer_input"
                      name="email"
                      onChange={this.onTextHandler.bind(this)}
                    />
                  </div>

                  <div className="form-group">
                    <p>Password</p>
                    <input
                      type="password"
                      className="form-control signInBuyer_input"
                      name="password"
                      onChange={this.onTextHandler.bind(this)}
                    />
                  </div>

                  <div className="form-group" id="signInBuyer_forgotPassword">
                    <input type="checkbox" id="scales" name="scales" />
                    <p>Remember Me</p>
                    <button>
                      <p>Forgot your password?</p>
                    </button>
                  </div>

                  <button
                    type="button"
                    id="sendlogin"
                    className="btn btn-primary"
                    onClick={this.signIn.bind(this)}
                  >
                    SIGN IN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row col-xs-12 col-sm-6 col-md-6 justify-content-center align-items-center"
          id="signInBuyer_register"
        >
          <h1>CREATE ACCOUNT</h1>
          <p>
            Registration is free for buyers. Join Perfetii.com right now
            <br />
            and your purchasing is just one-click away.
            <br />
            Instead of visiting a single store online, you can now visit
            <br />
            all the online stores of your favorite vendors and order in the
            <br />
            convenience of your home or office.
          </p>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="card">
              <div className="card-body">
                <form action="" autoComplete="off">
                  <button
                    type="button"
                    id="sendlogin"
                    className="btn btn-primary"
                    onClick={this.buyerRegistration.bind(this)}
                  >
                    CREATE ACCOUNT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
