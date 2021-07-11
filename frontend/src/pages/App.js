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
//import PrivateRoute from "../components/PrivateRoute";


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "LOGGED_OUT",
      user:{}
    }
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
            user: response.data,
            loggedInStatus: "LOGGED_IN",
          })
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

      <Route exact path={`/:user`} >
        <Sidebar/>
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
