import { useState, useEffect, StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Login from "./LoginPage"

const App = () => {
  const theme = useState("darkblue");
  const validated = false;

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    console.log("token : ", token)
  }
    /*if(localCache["auth_token"]){
      checkAuthToken();
    }

    async function checkAuthToken () {
      fetch(`http://localhost:8000/auth/users/me/`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + localCache["auth_token"],
        },
      }).then( response => console.log(response.status))
    }
  }, ["auth_token"]*/)

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <Switch>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
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
