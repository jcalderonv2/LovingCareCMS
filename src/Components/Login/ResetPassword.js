import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import img from './../../img/logo.png';
import './../../css/login.css';
import firebase from './../../Components/Firebase/firebaseConfig';
import Swal from 'sweetalert2'
import {withRouter} from 'react-router-dom';

firebase.auth().languageCode = 'es_419';

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

class ResetPassword extends Component {

    constructor(props) {

        super(props);
        this.reset = this.reset.bind(this);

        this.handleChange = this.handleChange.bind(this);

        this.state = {

            email: ""

        }

    }

    reset(e) {

        e.preventDefault();

        firebase.auth().sendPasswordResetEmail(this.state.email).then((u) => {

            console.log(u)
            Swal.fire({
                icon: 'success',
                title: 'Revisar correo electrónico',
                text: 'Por favor ingrese a su correo electrónico para realizar el cambio de contraseña.',
                confirmButtonText: 'Aceptar',
            }).then(
                this.props.history.push('/')
            )

        }).catch((err) => {

            console.log(err)

            Swal.fire({
                icon: 'error',
                title: 'Datos inválidos',
                text: 'Los datos ingresados son inválidos, inténtelo de nuevo.',
                confirmButtonText: 'Aceptar',
            })

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

                    <div id="imgLogin" >

                        <img src={img} alt="description"></img>

                    </div>

                    <div className="info">

                        <h4>Recuperar contraseña</h4>
                        <p className="pColor">Ingrese el correo electrónico asociado a su cuenta</p>

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

                        <div className="createAccount">

                            <Button onClick={this.reset} fullWidth> Confirmar </Button>

                        </div>

                        <Button onClick={() => this.props.history.push('/') } fullWidth id="btnCancel"> Cancelar </Button>


                    </form>

                </div>

            </Container>
        );

    }
}

export default withRouter(ResetPassword);
