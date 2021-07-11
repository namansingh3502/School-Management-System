import React, {Component} from "react";

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {username} = this.props.data.user;

    console.log("loggedinstatus", this.props.data.loggedInStatus)
    if (this.props.data.loggedInStatus === "LOGGED_OUT"){
      return(<p>Loading...</p>)
    }
    else {
      return(
        <div className={"ml-80 pl-5 pt-10"}>
          <h1 className={"text-4xl"}>Dashboard</h1>
          <div className="flex grid-cols-4 gap-4">
            <div className="col"></div>

          </div>

        </div>
      )
    }
  }
}
