import React from "react";
import "../styles/navbar.css"
import { BiLogIn } from "react-icons/bi";
import { AiOutlineFileSearch, AiOutlineHome } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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

                <NavLink to="/home">
                    <AiOutlineHome size={20} className="mb-1 me-2" />
                    Home
                </NavLink>

                <NavLink to="/clientes/consultaClientes">
                    <FaUsers size={20} className="mb-1 me-2" />
                    Clientes
                </NavLink>

                <NavLink to="/carros/consultaCarros">
                    <IoCarSportSharp size={20} className="mb-1 me-2" />
                    Carros
                </NavLink>

                <NavLink to="/logsystem">
                    <AiOutlineFileSearch size={20} className="mb-1 me-2" />
                    Logs System
                </NavLink>

                <NavLink to="/login">
                    <BiLogIn size={20} className="mb-1 me-2" />
                    Login
                </NavLink>

                <div className="animation start-home"></div>
            </div>
        </nav>
    )
}