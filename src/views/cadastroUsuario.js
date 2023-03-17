import React from "react";
import "../styles/login.css"
import UsuarioService from "../app/service/usuarioService";
import {useNavigate} from 'react-router-dom';
import * as messages from '../components/toastr'

import { 
    SiSpring, SiReact, SiPostgresql, SiFacebook ,SiGoogle, SiGithub, SiLinkedin,
    SiJsonwebtokens

} from "react-icons/si";

import { FaUsers } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { AuthContext } from "./main/provedorAutenticacao";

class CadastroUsuario extends React.Component{
    
    constructor(props){
        super(props);
        this.usuarioService = new UsuarioService();
 
    }

    handleChande= (event) =>{
        
        const value = event.target.value; // pegando o valor do input
        const name = event.target.name; // pegando o name da Tag

        this.setState({ [name] : value}) // setando os valores
    }

    state = {
        email: '',
        senha: '',
        senhaConfirmacao: '',
        nome: '',
        mensagemErro: null,
        admin: false
       
    }

    prepareCadastrar = ()=> {

        console.log(this.state)
        
        const { 
            email , senha , senhaConfirmacao, nome, admin

        } = this.state;

        const usuario = {
            nome,
            email , 
            senha , 
            senhaConfirmacao, 
            admin, 
        }
        
        try{
            this.usuarioService.validar(usuario)

        }catch(erro){
            console.log(erro)
            const mensagens = erro.mensagens;
            mensagens.forEach( msg => messages.mensagemErro(msg));
            return false;
    
        }
  
        this.usuarioService
            .salvar(usuario)
            .then(Response => {
                this.props.navigate('/login')
                messages.mensagemSucesso('usuario Cadastratado com sucesso!')

            }).catch(error => {
                messages.mensagemErro(error.response.data)
            })
            
    }


    render(){
  
        return (
            <section className="background-radial-gradient overflow-hidden">
               
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">

                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0"  style={{ zIndex: "10" }}  >
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }} >
                            Aluguel de usuario <br />
                            <div style={{ color: "hsl(218, 81%, 75%)" }} >Rodrigo FullStack</div>
                            </h1>
                            <div className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }} >
                            Essa é uma Aplicação para pratica de Spring boot API e React  JS!
                            < br />
                            A Aplicação conta com Spring boot, React , Postgres , Toekn JWT e Bootstrap 
                            </div>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">

                            <div className="text-light d-flex justify-content-center mb-3" >

                                <SiSpring size={45} className="mb-2 me-2 " /> Spring 
                                <SiReact size={45} className="mb-2 me-2 ms-4" /> React 
                                <SiPostgresql size={45} className="mb-2 me-2 ms-4" /> PostgreSQL
                                <SiJsonwebtokens size={45} className="mb-2 me-2 ms-4" /> JWT Token 

                            </div>    

                            <div className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">

                                    <h1 className="d-flex justify-content-center mt-0 mb-3" 
                                       
                                       style={{color: "blue", fontSize:"150%"}}> 
                                       Cadastro de Usuario
                                       
                                   </h1>

                                   <div className="row">
                                        <div className="col-md-12">

                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example1">Nome :</label>

                                                <input id="inputNome" 
                                                    type="text" 
                                                    className="form-control"
                                                    name="nome"
                                                    value={this.state.nome}
                                                    onChange={this.handleChande} 
                                                    placeholder="Nome Usuario"/>
                                                
                                            </div>

                                        </div>
                                        
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3">Endereço de Email:</label>
                                            
                                            <input id="inputEmail" 
                                                    type="text" 
                                                    className="form-control"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.handleChande} 
                                                    placeholder="Email Usuario"/>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4">Senha :</label>

                                                <input id="inputSenha" 
                                                    type="password" 
                                                    className="form-control"
                                                    name="senha"
                                                    value={this.state.senha}
                                                    onChange={this.handleChande} />

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4">Senha de confirmação :</label>
                                            
                                                    <input id="inputSenhaConfirmacao" 
                                                        type="password" 
                                                        className="form-control"
                                                        name="senhaConfirmacao"
                                                        value={this.state.senhaConfirmacao}
                                                        onChange={this.handleChande} />

                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex justify-content-center">
                                       

                                        <button onClick={ this.prepareCadastrar } 
                                                className="ms-3 btn btn-success mb-4 ">
                                            <FaUsers /> Criar Conta
                                        </button>

                                        <button onClick={ e => this.props.navigate('/login') } 
                                            className="btn btn-danger btn-block mb-4 ms-2">
                                            <BiLogIn /> Voltar
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


export default function CadastroUsuarioFunction(props){

    CadastroUsuario.contextType = AuthContext
    const navigate = useNavigate();
    return(<CadastroUsuario navigate={navigate}></CadastroUsuario>)

}

