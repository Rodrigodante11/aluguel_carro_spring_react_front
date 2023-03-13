import React from "react";
import "../styles/navbar.css"
import { BiLogIn } from "react-icons/bi";
import { AiOutlineFileSearch, AiOutlineHome } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

export function NavBar(){
    return (
        <nav id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header">
            
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">

                <a href="/">
                    <AiOutlineHome size={20} className="mb-1 me-2" />
                    Home
                </a>

                <a href="/">
                    <FaUsers size={20} className="mb-1 me-2" />
                    Clientes
                </a>

                <a href="/">
                    <IoCarSportSharp size={20} className="mb-1 me-2" />
                    Carros
                </a>

                <a href="/">
                    <AiOutlineFileSearch size={20} className="mb-1 me-2" />
                    Logs System
                </a>

                <a href="/">
                    Login
                    <BiLogIn size={20} className="mb-1 me-2" />
                </a>

                <div className="animation start-home"></div>
            </div>
            
        </nav>
    )
}