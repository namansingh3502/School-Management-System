import React from "react"
import { BrowserRouter as Router, Route} from 'react-router-dom'

const Protected = () => <h3>Protected</h3>;


export default function Path () {
  return (
    <Router>
      <div>
        <Route path="/home" component={Protected} />
      </div>
    </Router>
  )
}