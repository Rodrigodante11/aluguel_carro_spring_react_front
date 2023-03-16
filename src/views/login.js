import React from "react";
import "../styles/login.css"
import UsuarioService from "../app/service/usuarioService";
import {useNavigate} from 'react-router-dom';
import AuthService from "../app/service/authService";
import { 
    SiSpring, SiReact, SiPostgresql, SiFacebook ,SiGoogle, SiGithub, SiLinkedin
} from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.service = new UsuarioService();
 
    }

    state = {
        email: '',
        senha: '',
        mensagemErro: null,
       
    }

    entrar = ()=> {
    
        this.service.autenticar(
            {
                email: this.state.email,
                senha: this.state.senha
            }
        ).then(response => {
            
            AuthService.logar(response.data)
           
            this.props.navigate('/home')
            
            // this.context.iniciarSessao(response.data)
            // LocalStorageService.addItem('_usuario_logado', response.data)

        }).catch( error =>{  
            
        //    this.setState({ mensagemErro : error.response.data +"!"})
            
        })
    }
   
    prepareCadastrar = () => {

        this.props.navigate('/home')
    }


    render(){
  
        return (
            <section className="background-radial-gradient overflow-hidden">
               
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">

                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0"  style={{ zIndex: "10" }}  >
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }} >
                            Aluguel de carro <br />
                            <div style={{ color: "hsl(218, 81%, 75%)" }} >Rodrigo FullStack</div>
                            </h1>
                            <div className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }} >
                            Essa é uma Aplicação para pratica de Spring boot e React !
                            < br />
                            A Aplicação conta com Spring boot, React , Bootstrap e Postgres
                            </div>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">

                            <div className="text-light d-flex justify-content-center mb-3" >

                                <SiSpring size={45} className="mb-2 me-2 " /> Spring 
                                <SiReact size={45} className="mb-2 me-2 ms-4" /> React 
                                <SiPostgresql size={45} className="mb-2 me-2 ms-4" /> Postgres 
                            </div>    

                            <div className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">

                                    <span className="d-flex justify-content-center " 
                                    style={{color: "red", fontSize:"135%"}}> 
                                        {this.state.mensagemErro} 
                                    </span>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="text" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example1">Nome</label>
                                        </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="text" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example2">Sobrenome</label>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" 
                                            className="form-control" 
                                            value={this.state.email}
                                            onChange= {  e => this.setState({email: e.target.value})}/>
                                            
                                        <label className="form-label" htmlFor="form3Example3">Endereço de Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" 
                                            className="form-control" 
                                            value={this.state.senha}
                                            onChange= {  e => this.setState({senha: e.target.value})}/>

                                        <label className="form-label" htmlFor="form3Example4">Senha de confirmação</label>
                                    </div>
                            
                                    <div className="d-flex justify-content-center">
                                        <button onClick={ this.entrar } className="btn btn-primary btn-block mb-4 ">
                                            <BiLogIn /> Entrar
                                        </button>

                                        <button onClick={ this.prepareCadastrar } 
                                                className="ms-3 btn btn-success mb-4 ">
                                            <FaUsers /> Criar Conta
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <p>Ou entro com:</p>
                                        
                                        <SiFacebook size={35} className="mb-2 me-2 " /> 
                                    
                                        <SiGoogle size={35} className="mb-2 me-2 " />

                                        <SiGithub size={35} className="mb-2 me-2 " /> 

                                        <SiLinkedin size={35} className="mb-2 me-2 " /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default function LoginFunction(props){

    const navigate = useNavigate();
    return(<Login navigate={navigate}></Login>)

}

