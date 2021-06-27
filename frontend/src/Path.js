import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard"

export default function Path() {

  let validated = false;

  async function checkAuthToken() {

    const res = await fetch(`http://127.0.0.1:8000/auth/users/me/`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('auth_token'),
        },
      }
    );
    const data = await res.json();
    console.log(data);
    if( res.ok ){
      validated = true;
    }
  }

    checkAuthToken().then( () => {
    });


  if( !validated ){
    return <Redirect to="/login" />
  }
  else{
    return(
      <div>
        <Router>
          <Switch>
            <Route path='/home'>
              <Dashboard/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  };
}
