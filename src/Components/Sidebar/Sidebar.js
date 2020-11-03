import React, { Component } from 'react';
import firebase from './../../Components/Firebase/firebaseConfig';
import './../../css/sb-admin-2.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../../css/menu.css';
import img from './../../img/logo.png';
import Swal from 'sweetalert2'



class Sidebar extends Component {

    logout() {

        Swal.fire({
            title: 'Cerrar sesión',
            text: 'Seleccione aceptar si desea cerrar sesión.',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            reverseButtons: true
          }).then((result) => {

            if (result.isConfirmed) {

                firebase.auth().signOut();

            }
          })
    }

    render() {

        return (

            <div>

                <ul class="navbar-nav menuColor sidebar sidebar-dark accordion" id="accordionSidebar">

                    <div id="img">
                    <a class="nav-link" href="index.html">
                        <img src={img} alt="description"></img>
                        </a>
                    </div>

                    <hr class="sidebar-divider" />

                    <div class="sidebar-heading">
                        Usuarios
                    </div>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href=".">
                            <FontAwesomeIcon icon={['fas', 'hand-holding-usd']} className="iconSpace" />

                            <span>Donadores</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href=".">
                            <FontAwesomeIcon icon={['fas', 'heart']} className="iconSpace" />

                            <span>Beneficiarios</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href=".">
                            <FontAwesomeIcon icon={['fas', 'hands-helping']} className="iconSpace" />

                            <span>Instituciones</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href=".">
                            <FontAwesomeIcon icon={['fas', 'store-alt']} className="iconSpace" />

                            <span>Comercios</span>
                        </a>
                    </li>

                    <hr class="sidebar-divider" />

                    <div class="sidebar-heading">
                        Extras
                    </div>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href=".">
                            <FontAwesomeIcon icon={['fas', 'ad']} className="iconSpace" />

                            <span>Publicidad</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href=".">
                            <FontAwesomeIcon icon={['fas', 'chart-area']} className="iconSpace" />

                            <span>Estadísticas</span>
                        </a>
                    </li>

                    <hr class="sidebar-divider" />

                    <div class="sidebar-heading">
                        Cuenta
                    </div>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href=".">
                            <FontAwesomeIcon icon={['fas', 'user-circle']} className="iconSpace" />

                            <span>Perfíl</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a role="button" class="nav-link collapsed" onClick={this.logout} >
                            <FontAwesomeIcon icon={['fas', 'sign-out-alt']} className="iconSpace options" />

                            <span>Cerrar sesión</span>
                        </a>
                    </li>
                </ul>
            </div>

        )

    }

}

export default Sidebar