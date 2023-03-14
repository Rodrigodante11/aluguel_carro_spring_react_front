import React from "react";
import "../styles/navbar.css"

import { BiLogIn } from "react-icons/bi";
import { AiOutlineFileSearch, AiOutlineHome } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import AuthService from "../app/service/authService";

export default function NavBar(){
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

                <NavLink to="/home" style={{ textDecoration: 'none' }}>
                    <AiOutlineHome size={20} className="mb-1 me-2" />
                        Home
                </NavLink>

                <NavLink to="/clientes/consultaClientes" style={{ textDecoration: 'none' }}>
                    <FaUsers size={20} className="mb-1 me-2" />
                    Clientes
                </NavLink>

                <NavLink to="/carros/consultaCarros" style={{ textDecoration: 'none' }}>
                    <IoCarSportSharp size={20} className="mb-1 me-2" />
                    Carros
                </NavLink>

                <NavLink to="/logsystem" style={{ textDecoration: 'none' }}>
                    <AiOutlineFileSearch size={20} className="mb-1 me-2" />
                    Logs System
                </NavLink>
                
                <NavLink to="/login" onClick={AuthService.removerUsuarioLogado} style={{ textDecoration: 'none' }}>
                    <BiLogIn size={20} className="mb-1 me-2" />
                    Login
                </NavLink>
                
                <div className="animation start-home"></div>
            </div>
        </nav>
    )
}