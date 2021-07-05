import {
  BrowserRouter as Router,
  Link,
  Route,
  withRouter,
  Switch,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import React, { StrictMode, Component} from "react";
import { render } from "react-dom";
import axios from "axios";

import Login from "../components/Login"
import Dashboard from "./Dashboard";
//import PrivateRoute from "../components/PrivateRoute";


export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      tokenValidationStatus: "Loading",
      user:{}
    }

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.setState({ loggedInStatus: "LOGGED_IN" });

    localStorage.setItem("Token", data.auth_token );
    console.log("logged in ", this.state.loggedInStatus, data.auth_token );
    this.props.history.push("/dashboard");
  }

  checkLoginStatus() {

    const Token = localStorage.getItem("Token");
    console.log( "Here", Token)

    axios
      .get("http://127.0.0.1:8000/auth/users/me/",
        {
          headers: {
            Authorization: Token
          }
        }
      )
      .then(response => {
        if ( response.status === 200 ){
            this.setState({
              loggedInStatus: "LOGGED_IN",
            });
            console.log( response.data)
            this.setState({ user: response.data })
        }
        else if (
            response.status !== 200 &&
            this.state.loggedInStatus === "LOGGED_IN"
          ){
            localStorage.clear();
            this.setState({
              loggedInStatus: "NOT_LOGGED_IN",
              user: {}
            });

          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />

        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render(){
    return (

    <Switch>

      <Route exact path={"/login"} >
        <Login data={this.state} />
      </Route>

      <Route exact path={"/dashboard"} >
        <Dashboard data={this.state} />
      </Route>

    </Switch>
  );}
};

render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
