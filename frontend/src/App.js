import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from "react-router-dom";
import { useState, useEffect, StrictMode } from "react";
import { Component } from "react";

import ThemeContext from "./ThemeContext";
import { render } from "react-dom";
import Login from "./AuthPage";
import Path from "./Path";


const App = () => {
  const [validated, updateValidated] = useState(false);
  const theme = useState("darkblue");

  async function checkAuthentication (){

    const res = await fetch(`http://localhost:8000/auth/users/me/`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("Token")
      }
    });

    const json = res.json();

    if( res.ok ){
      updateValidated(true);
    }

  }

  const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log("pehle home pe validated : ", validated );

    const token = localStorage.getItem("Token");
    console.log(token)

    if( token !== undefined ){
      const val = checkAuthentication();
    }

    console.log("baad mein home pe validated : ", validated );
    return(
      <Route {...rest} render={(props) => (
        validated === true
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
      )} />
    )
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/home" component={Path}/>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

/*
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      validated: false,
      theme: "darkblue"
    };

    this.handleValidated = this.handleValidated().bind(this);
  }

  handleValidate() {this.setState({validated:true});}

  async checkAuthentication(){

    const res = await fetch(`http://localhost:8000/auth/users/me/`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("Token")
      }
    });
    const json = res.json();
    if( res.ok ){
      this.handleValidate();
      console.log("validated : ", validate );
    }
  };

  PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("Token");

    console.log("pehle home pe validated : ", validated );
    console.log(token)
    if( token !== undefined ){ checkAuthentication(); }

    console.log("baad mein home pe validated : ", validated );

    return(
      <Route {...rest} render={(props) => (
        validated === true
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
      )} />
    )
  }

  render(){
    return (
      <StrictMode>
        <ThemeContext.Provider value={theme}>
          <div>
            <Router>
              <Route path="/login" component={Login}/>
              <PrivateRoute path="/home" component={Path}/>
            </Router>
          </div>
        </ThemeContext.Provider>
      </StrictMode>
    );

  };
}

*/