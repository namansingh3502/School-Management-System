import { useState, useEffect, StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Login from "./LoginPage"
import Path from "./Path";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Path/>
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
