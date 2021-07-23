import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";


export default class Path extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkLoginStatus( this.props );
  }

  render(){
    const data = this.props.data;
    console.log()

    if ( data.loadingStatus === "NOT_LOADED" ){
      return ( <h1 className="text-3xl" > LOADING............... </h1> )
    }
    if ( data.loadingStatus === "ERROR" && data.loggedInStatus === "NOT_LOGGED_IN" ) {
      return ( <Redirect to={`/login`} /> )
    }
    return(
      <>
      <Sidebar/>
      <Switch>
        <Route exact path={`/:user/dashboard`}>
          <Dashboard data={this.props.data}/>
        </Route>
        <Route exact path={'/:user/profile'}>
        </Route>
      </Switch>
      </>
    )
  }

}