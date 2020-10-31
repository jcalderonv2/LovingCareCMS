import './App.css';
import React, { Component } from 'react';
import firebase from './Components/Firebase/firebaseConfig'
import Login from './Components/Login/Login.js'
import Home from './Components/Home/Home.js'


class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      user: {}

    }

  }

  componentDidMount() {

    this.authListener();

  }

  authListener() {

    firebase.auth().onAuthStateChanged((user) => {

      if (user) {

        this.setState({ user })

      }

      else {

        this.setState({ user: null })

      }

    })

  }

  render() {

    return (

      (this.state.user ? (<Home />) : (<Login />))

    )

  }

}

export default App



