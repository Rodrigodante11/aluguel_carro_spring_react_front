
import React from "react";
import "../styles/footer.css"

import { SiSpring, SiReact, SiPostgresql, SiBootstrap } from "react-icons/si";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { FaLaptopCode, FaHome, FaPhoneAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer(){
    return (
    <>
        <footer className="text-center text-lg-start text-muted">
        
        <section className="">
            <div className="container text-center text-md-start">
            
                <div className="row mt-3">
                    
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    
                        <h6 className="text-uppercase fw-bold mb-4 text-white mt-4">
                            <span>
                                <FaLaptopCode size={30} className="mb-1 me-2" />
                                Rodrigo FullStack 

                            </span>
                        </h6>
                        <span>
                            <FaHome size={20} className="mb-1 me-2" />Atualmente Moro em Minas Gerais .
                            < br/>

                            <FaPhoneAlt size={20} className="mb-1 me-2" />35 99808 1577
                            < br/>

                            <MdEmail size={20} className="mb-1 me-2" />rodrigoaugusto839@gmail.com
                            < br/>

                            <MdWhatsapp size={20} className="mb-1 me-2" />35 99808 1577
                        </span>
                    </div>
                    <hr />
                    <hr />

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-4">
                    
                        <h6 className="text-uppercase fw-bold mb-4 ">
                            <span>
                                Ferramentas
                            </span>
                        </h6>

                        <span>
                            <SiSpring size={30} className="mb-1 me-2" /> Spring 
                            <br />
                        
                            <SiReact size={30} className="mb-1 me-2" /> React 
                            <br />

                            <SiPostgresql size={30} className="mb-1 me-2" /> Postgres 
                            <br />

                            <SiBootstrap size={30} className="mb-1 me-2" /> Bootstrap 
                            
                        </span>
                    
                    </div>

                    <hr />
                    <hr />

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                        <span>
                            <h6 className="text-uppercase fw-bold mb-4 ">
                                Links
                            </h6>
                        
                        
                            <a href="https://github.com/Rodrigodante11" 
                                target= "_blank" 
                                className="text-reset" rel="noreferrer" >

                                <BsGithub size={30} className="mb-1 me-2" /> 
                                Meu Git 
                            </a>
                            <br />
                        
                            <a href="https://www.linkedin.com/in/rodrigo-augusto-285691204/"
                            target= "_blank" 
                            className="text-reset" rel="noreferrer">
                                <AiFillLinkedin size={30} className="mb-1 me-2" /> 
                                Meu Linkedin
                            </a>
                        </span>
                    </div>
                    <hr />
                    <hr />
                
                </div>

            </div>
        </section>

        <div className="text-center p-4" >
            <span>© 2023 Copyright: Rodrigo Augusto Ltda</span>
        </div>
        </footer>

    </>
    )
}