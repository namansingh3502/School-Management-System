import React, {Component} from "react";

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    console.log("loggedinstatus", this.props.data.loggedInStatus)
    if ( this.props.data.loggedInStatus === "LOGGED_OUT"){
      return(<p>Loading...</p>)
    }
    else {
      return(<div>
        <p> Login {this.props.data.loggedInStatus}</p>
        <p> Token {this.props.data.tokenValidationStatus}</p>
        <p> User {this.props.data.user.username}</p>
      </div>)
    }
  }
}
