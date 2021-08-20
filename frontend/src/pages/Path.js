import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import Profile from "../components/Profile";
import ClassRoutine from "../components/ClassRoutine";
import StudentInformation from"../components/StudentInformation"
import Demo from"../pages/demo"

const Topbar = () => {
  return(<div className="ml-80 fixed w-full h-14 z-40"></div>)
}

export default class Path extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.checkLoginStatus( this.props );
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
      <Sidebar className=""/>
      <Topbar/>
      <Switch>
        <Route exact path={`/`}>
          <Dashboard data={this.props.data}/>
        </Route>
        <Route exact path={`/Profile`}>
          <Profile data={this.props.data} />
        </Route>
        <Route exact path={`/Class-Routine`}>
          <ClassRoutine data={this.props.data} />
        </Route>
        <Route exact path={`/Student-Information`}>
          <StudentInformation data={this.props.data} />
        </Route>
        <Route exact path={`/demo`}>
          <Demo />
        </Route>
      </Switch>
      </>
    )
  }

}