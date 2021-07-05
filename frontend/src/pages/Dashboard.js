import React, {Component} from "react";

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    console.log("loggedinstatus", this.props.data.loggedInStatus, this.props.data.tokenValidationStatus)

    if (
      this.props.data.loggedInStatus === "NOT_LOGGED_IN"
      && this.props.data.tokenValidationStatus === "Loading"
    ){
      return (<p>Loading...</p>)
    }
    if (
      this.props.data.loggedInStatus === "NOT_LOGGED_IN"
      && this.props.data.tokenValidationStatus === "Loaded"
    ) {
      return (<p>Loading...</p>)
    }


    return <div>
        <p> Login {this.props.data.loggedInStatus}</p>
        <p> Token {this.props.data.tokenValidationStatus}</p>
        <p> User {this.props.data.user.username}</p>
    </div>
  }
}
