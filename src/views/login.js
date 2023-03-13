import React from "react";
import "../styles/login.css"

export default class Login extends React.Component{

    state = {
        email: '',
        senha: '',
        mensagemErro: null
    }

    entrar = ()=> {
        console.log(this.state)
    }

    prepareCadastrar = () => {
       
        this.props.history.push('/cadastro-usuarios')
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
                        Essa é uma Aplicação para pratica de Spring boot e React 
                        A Aplicação conta com Spring boot, React , Bootstrap e Postgres
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div className="position-absolute shadow-5-strong"></div>

                        <div className="card bg-glass">
                        <div className="card-body px-4 py-5 px-md-5">
                            <form>
                        
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input type="text" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example1">First name</label>
                                    </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input type="text" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                                    </div>
                                    </div>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" 
                                        className="form-control" 
                                        value={this.state.email}
                                        onChange= {  e => this.setState({email: e.target.value})}/>
                                        
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" 
                                        className="form-control" 
                                        value={this.state.senha}
                                        onChange= {  e => this.setState({senha: e.target.value})}/>

                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>
                        
                                <div className=" d-flex justify-content-center">
                                    <button onClick={ this.entrar } className="btn btn-primary btn-block mb-4 ">
                                        Sign up
                                    </button>

                                    <button onClick={ this.prepareCadastrar } 
                                            className="ms-3 btn btn-success mb-4 ">
                                        Create Account
                                    </button>
                                </div>

                                <div className="text-center">
                                    <p>or sign up with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}