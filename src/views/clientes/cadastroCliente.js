import React from "react";
import ClienteService from "../../app/service/ClienteService";
import FormGroup from "../../components/form-group";
import {useNavigate} from 'react-router-dom';
import SelectMenu from "../../components/selectMenu";
import * as messages from '../../components/toastr'

export class CadastroCliente extends React.Component{

    constructor(){

        super();
        this.clienteService = new ClienteService();
       
    }

    handleChande= (event) =>{
        const value = event.target.value; // pegando o valor do input
        const name = event.target.name; // pegando o name da Tag

        this.setState({ [name] : value}) // setando os valores
    }

    componentDidMount(){
        
    }
    
    state = {

        nome:'',
        idade: null,
        email: '',
        cpf: '',
        enderecoRua:'',
        enderecoNumero: null,
        enderecoComplemento:'',
        cidade: '',
        estado:'',
        showConfirmDialog: false,
        clientedeletar:{},
        clientes: []
    }

    submit = () => { 

        const { 
            nome , idade , email, cpf, enderecoRua, enderecoNumero, 
            enderecoComplemento , cidade, estado

        } = this.state;

        const cliente = {
            nome , 
            idade , 
            email, 
            cpf, 
            enderecoRua, 
            enderecoNumero, 
            enderecoComplemento , 
            cidade, 
            estado   //estado:estado
        }

        try{
            this.clienteService.validar(cliente)
            // this.props.navigate('/clientes/consultaClientes')
        }catch(erro){
          
            const mensagens = erro.mensagens;
            mensagens.forEach( msg => messages.mensagemErro(msg));
            return false;
    
        }

        this.clienteService
            .salvar(cliente)
            .then(Response => {
                this.props.navigate('/clientes/consultaClientes')
                messages.mensagemSucesso('Lancamento Cadastratado com sucesso!')

            }).catch(error => {
                messages.mensagemErro(error.response.data)
            })
    }
    render(){

        return (
            <div className="card m-5" >
       
                <h3 className="card-header d-flex justify-content-center">
                {this.state.atualizando ? "Atualizar Clientes" :  "Cadastro de Clientes"}
                </h3>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-6">
                            <FormGroup id="inputNome" label="Nome: *">

                                <input id="inputNome" 
                                    type="text" 
                                    className="form-control"
                                    name="nome"
                                    value={this.state.descricao}
                                    onChange={this.handleChande}/>

                            </FormGroup>
                        </div>
                    </div>
            
                    <div className="row">

                        <div className="col-md-6">
                            <FormGroup id="inputEmail" label="Email: *">

                                <input id="inputEmail" 
                                    type="text" 
                                    className="form-control" 
                                    name="email"
                                    value={this.state.ano}
                                    onChange={this.handleChande}/>

                            </FormGroup>
                        </div>
                    
                        <div className="row">
                            <div className="col-md-4">
                                <FormGroup id="inputIdade" label="Idade: *">

                                    <input id="inputIdade" 
                                        type="number" 
                                        className="form-control"
                                        name="idade"
                                        value={this.state.valor}
                                        onChange={this.handleChande}/>

                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            
                            <div className="col-md-6">
                                <FormGroup id="inputEnderecoRua" label="Endereço Rua: *">

                                    <input id="inputEnderecoRua" 
                                        type="text" 
                                        className="form-control"
                                        name="enderecoRua"
                                        value={this.state.valor}
                                        onChange={this.handleChande}/>

                                </FormGroup>
                            </div>

                            <div className="col-md-3">
                                <FormGroup id="inputEnderecoNumero" label="Endereço N°: *">

                                    <input id="inputEnderecoNumero" 
                                        type="number" 
                                        className="form-control"
                                        name="enderecoNumero"
                                        value={this.state.valor}
                                        onChange={this.handleChande}/>

                                </FormGroup>
                            </div>

                            <div className="col-md-3">

                                <FormGroup id="inputTipo" label="Estado: *">

                                    <SelectMenu id="inputTipo" 
                                        className="form-control"
                                        name="estado"
                                        value={this.state.valor}
                                        onChange={this.handleChande} />         

                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">
                            
                            <div className="col-md-6">
                                <FormGroup id="inputCidade" label="Cidade : *">

                                    <input id="inputEnderecoRua" 
                                        type="text" 
                                        className="form-control"
                                        name="cidade"
                                        value={this.state.valor}
                                        onChange={this.handleChande}/>

                                </FormGroup>
                            </div>

                            <div className="col-md-3">
                                 <FormGroup id="inputComplemento" label="Complemento: ">

                                    <input id="inputComplemento" 
                                        type="text" 
                                        className="form-control"
                                        name="complemento"
                                        value={this.state.valor}
                                        onChange={this.handleChande}/>

                                </FormGroup>
                            </div>

                            <div className="col-md-3">
                                 <FormGroup id="inputCpf" label="CPF: ">

                                    <input id="inputCpf" 
                                        type="text" 
                                        className="form-control"
                                        name="cpf"
                                        value={this.state.valor}
                                        onChange={this.handleChande}/>

                                </FormGroup>
                            </div>

                        </div>
                    </div>

                    <div className="card-body d-flex justify-content-center">

                        {this.state.atualizando ?  // condicao ternaria para ver se a tela vai para atualizar ou cadastrar Cliente
                            (

                                <button onClick={this.atualizar} type="button" 
                                        className="btn btn-primary btn-lg me-4">
                                        <i className="pi pi-refresh"></i> Atualizar
                                </button>   

                            ) : (

                                <button onClick={this.submit} type="button" 
                                        className="btn btn-success btn-lg me-4">
                                        <i className="pi pi-save"></i> Salvar
                                </button>

                            )

                        }
                    
                        <button onClick={ e => this.props.navigate('/clientes/consultaClientes')}
                            type="button" className="btn btn-danger btn-lg me-2">
                                <i className="pi pi-times"></i> Cancelar
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}

export default function CadastroClienteFunction(props){

    const navigate = useNavigate();
    return(<CadastroCliente navigate={navigate}></CadastroCliente>)

}