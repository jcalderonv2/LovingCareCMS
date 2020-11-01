import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import img from './../../img/logo.png';
import './../../css/login.css';
import firebase from './../../Components/Firebase/firebaseConfig';
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: "#207e9e",
        borderColor: "#207e9e"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

class Login extends Component {

    constructor(props) {

        super(props);
        this.login = this.login.bind(this);
        this.crear = this.crear.bind(this);

        this.handleChange = this.handleChange.bind(this);

        this.state = {

            email: "",
            password: ""

        }

    }

    login(e) {

        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

            console.log(u)

        }).catch((err) => {

            console.log(err)

            Swal.fire({
                icon: 'error',
                text: 'Datos inválidos, inténtelo de nuevo.',
                confirmButtonText: 'Aceptar',
            })

        })

    }

    crear(e) {

        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

            console.log(u)

        }).catch((err) => {

            console.log(err)

        })

    }



    handleChange(e) {

        this.setState({

            [e.target.name]: e.target.value

        })

    }

    render() {

        return (

            <Container component="main" maxWidth="xs" className="contStyle">

                <CssBaseline />

                <div className="mainDiv" id="contStyle">

                    <div id="img">

                        <img src={img} alt="description"></img>

                    </div>

                    <form className={useStyles.form} noValidate>

                        <div className="email secc">

                            <label>Correo electrónico</label>

                            <input
                                placeholder="Correo electrónico"
                                type="email"
                                id="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                                value={this.state.email}
                            />

                        </div>

                        <div className="password secp">

                            <label htmlFor="password">Contraseña</label>

                            <input
                                placeholder="Contraseña"
                                type="password"
                                id="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                                value={this.state.password}
                            />

                        </div>

                        <div className="createAccount">

                            <Button onClick={this.login} fullWidth> Ingresar </Button>
                            <Button onClick={this.crear} fullWidth> Crear </Button>

                        </div>

                        <div className="createAccount">

                            <Grid container>

                                <Grid item xs>

                                    <a href="." variant="body2">

                                        ¿Olvidó su contraseña?

                                    </a>

                                </Grid>

                            </Grid>

                        </div>

                    </form>

                </div>

            </Container>
        );

    }


}

export default Login