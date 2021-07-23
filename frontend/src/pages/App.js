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
import Sidebar from "../components/Sidebar";
import Path from "./Path";

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "LOGGED_OUT",
      loadingStatus: "NOT_LOADED",
      user:{}
    }

    this.checkLoginStatus = this.checkLoginStatus.bind(this)
    this.handleState = this.handleState.bind(this)
  }

  handleState( state ) {
    this.setState( state )
  }

  checkLoginStatus() {

    const Token = localStorage.getItem("Token");

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
            user: response.data,
            loggedInStatus: "LOGGED_IN",
            loadingStatus: "LOADED"
          })
        }
        else if (
          response.status !== 200 &&
          this.state.loggedInStatus === "LOGGED_IN"
        ){
          localStorage.clear();
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            loadingStatus: "LOADED",
            user: {}
          })
        }
      })
      .catch(error => {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          loadingStatus: "ERROR",
          user: {}
        })
        console.log("check login error", error);
      });
  }

  render(){
    return (
    <Switch>
      <Route exact path={"/login"}>
        <Login
          data={this.state}
          checkLoginStatus={this.checkLoginStatus}
          handleState={this.handleState}
        />
      </Route>
      <Route path={`/:user`}>
        <Path data={this.state} checkLoginStatus={this.checkLoginStatus} />
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
