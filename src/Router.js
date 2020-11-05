import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App.js';
import ResetPassword from './Components/Login/ResetPassword.js'

export default class RouterApp extends Component {

  render() {

    return <div>

      <Router>

        <Route  path="/" exact render={() => {
          return <div>
            <App />
          </div>
        }}>
        </Route>

        <Route  path="/ResetPassword" exact render={() => {
          return <div>
            <ResetPassword />
          </div>
        }}>
        </Route> 

      </Router>
    </div>
  }

}
