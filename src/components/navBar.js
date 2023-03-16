import React from "react";
import "../styles/navbar.css"

import { BiLogIn } from "react-icons/bi";
import { AiOutlineFileSearch, AiOutlineHome } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthConsumer } from "../views/main/provedorAutenticacao";
import { MdOutlineDisabledVisible } from "react-icons/md";

function NavBar(props){

   
    const handleClick = (event) => {
        if(!props.isUsuarioAutenticado)
        {
            event.preventDefault();
        }
        
    };

    return (
        <nav id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header">
            
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close">
                </button>
            </div>

            <div className="offcanvas-body">

                <NavLink to="/home" style={{ textDecoration: 'none' }} >
                    <AiOutlineHome size={20} className="mb-1 me-2" />
                        Home
                </NavLink>

                <NavLink to="/clientes/consultaClientes" 
                         style={{ textDecoration: props.isUsuarioAutenticado ?'none': 'line-through' }} 
                         onClick={handleClick}>

                            {props.isUsuarioAutenticado ? 
                                (<FaUsers size={20} className="mb-1 me-2" />  )
                                :
                                (<MdOutlineDisabledVisible size={20} className="mb-1 me-2" />)
                            }
                            Clientes
                </NavLink>

                <NavLink to="/carros/consultaCarros" 
                         style={{ textDecoration: props.isUsuarioAutenticado ?'none': 'line-through' }} 
                         onClick={handleClick}>
                
                            {props.isUsuarioAutenticado ? 
                                (<IoCarSportSharp size={20} className="mb-1 me-2" />)
                                :
                                (<MdOutlineDisabledVisible size={20} className="mb-1 me-2" />)
                            }
                            Carros
                </NavLink>

                <NavLink to="/logsystem" 
                        style={{ textDecoration: props.isUsuarioAutenticado ?'none': 'line-through' }} 
                        onClick={handleClick}> 

                        {props.isUsuarioAutenticado ? 
                            (<AiOutlineFileSearch size={20} className="mb-1 me-2"/>)
                            :
                            (<MdOutlineDisabledVisible size={20} className="mb-1 me-2" />)
                        }
                        Logs System
                </NavLink>
                
                <NavLink to="/login" onClick={props.deslogar} style={{ textDecoration: 'none' }}>
                    <BiLogIn size={20} className="mb-1 me-2" />
                    {props.isUsuarioAutenticado ? "LogOut" :  "Login"}
                </NavLink>
                
                <div className="animation start-home"></div>
            </div>
        </nav>
    )
}

// export default NavBar;

// eslint-disable-next-line import/no-anonymous-default-export
export default  () => (
    <AuthConsumer>
        {
             (context) => ( <NavBar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao} /> )
        }
       
    </AuthConsumer>
)