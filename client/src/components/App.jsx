import React, { Component } from "react";
import Login from "./Login/index";
import Register from './Register/index';
import { Link, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch> */}
        <Register/>
      </div>
    );
  }
}

export default App;
