import React, { Component } from 'react';
import firebase from './../../Components/Firebase/firebaseConfig';

class Home extends Component {

    constructor(props) {

        super(props);
        this.state = {

        }

    }

    logout(){

        firebase.auth().signOut();

    }

    render() {

        return (

            <div>

                <h1>Bienvenido</h1>
                <button onClick={this.logout}>Cerrar</button>

            </div>

        )

    }

}

export default Home