import React from "react";

import FormGroup from "../../components/form-group";
import ClienteService from "../../app/service/ClienteService";

import '../../styles/cliente.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";

import {useNavigate} from 'react-router-dom';

import { Button } from 'primereact/button';
import { Dialog } from "primereact/dialog";

import Footer from "../../components/footer";
import ClienteTable from "./clienteTable";

import * as messages from '../../components/toastr'
import { RiFindReplaceLine } from "react-icons/ri";
import { HiUserPlus } from "react-icons/hi2";

export class ConsultClientes extends React.Component{

    constructor(){
        super();
        this.clienteService = new ClienteService();
    }

    componentWillMount(){

        this.clienteService
            .obterTodos()
            .then( response =>{
                const lista = response.data;
    
                if(lista.length <1){
                    messages.mensagemAlerta("Nenhum resultado foi encontrado")
                }
                   
                this.setState({ clientes : lista})
            }).catch( error =>{
                messages.mensagemAlerta(" Por favor faça Login no sistema")
            })
    }

    state = {

        nome:'',
        idade: '',
        email: '',
        cpf: '',
        enderecoRua:'',
        enderecoNumero: '',
        enderecoComplemento:'',
        cidade: '',
        estado:'',
        showConfirmDialog: false,
        clientedeletar:{},
        clientes: [],
    }

    buscar = () =>{

        const clienteFiltro = {
            nome: this.state.nome
        }

        this.clienteService
            .obterPornome(clienteFiltro)
            .then( response =>{
                const lista = response.data;
    
                if(lista.length <1){
                    messages.mensagemAlerta("Nenhum resultado foi encontrado")
                }
                   
                this.setState({ clientes : lista})
                
            }).catch( error =>{
                console.log(error)
            })
    }

    editar = (id) =>{
        this.props.navigate(`/clientes/cadastroClientes/${id}`)
    }
    detalhar = (id) =>{
        this.props.navigate(`/clientes/cadastroClientes/detalhar/${id}`)
    }

    abrirConfirmacaoDeletar = (cliente) =>{
      
        this.setState({ showConfirmDialog: true , clientedeletar: cliente})
        
    }
    cancelarDelecao =() =>{
        this.setState({ showConfirmDialog: false , clientedeletar: {} })
    }

    deletar = () =>{
        
        this.clienteService
            .deletar(this.state.clientedeletar.id)
            .then(response => {

                // comandos abaixo foi so para atualizar a pagina pois o item ja foi deletado 
                // entrando nesse metodo
                const clientesConst = this.state.clientes // pegando todos clientes 
                const indexParaDeletar = clientesConst.indexOf(this.clienteDeletar) // descobrindo o index do excluido

                clientesConst.splice(indexParaDeletar, 1) // deletando o excluido
                this.setState({clientes: clientesConst}) // setando a nova lista
                

                messages.mensagemSucesso('Cliente deletado com Sucesso')
                this.setState({ showConfirmDialog: false , clienteDeletar: {}})
                
            }).catch(error =>{
                messages.mensagemErro(' Erro ao tentar deletar o Cliente, , Possivelmente esta sendo usado em uma Locação')
               
            }).finally(() =>{
                this.setState({ clienteDeletar: {}})
            })
       
    }

    preparaFormularioCadastro =() => {
        this.props.navigate('/clientes/cadastroClientes')
    }

    render(){
        
        const confirmDialogFooter = (
            <div>
                <Button label="Confirmar" icon="pi pi-check" onClick={this.deletar} className="p-button-text" />
                
                <Button label="Cancelar" icon="pi pi-times"  onClick={this.cancelarDelecao} autoFocus />
            </div>
        );

        return(
            <>
                <div className='card m-5 bg-light bg-info' >
                
                    <h3 className="card-header d-flex justify-content-center">
                        Consulta de Clientes
                    </h3>
                    <div className="card-body">
        
                        <div className="row">
                            <div className="col-md-8">
                                <div className="bs-component">
        
                                    <FormGroup htmlFor="inputNome" label="Nome do Cliente: ">
                                        <input type="text" 
                                            className="form-control" 
                                            id="inputNome"
                                            value={this.state.nome}
                                            onChange={ e => this.setState({ nome: e.target.value})}                               
                                            placeholder="Digite o nome" />
                                    </FormGroup>

                                    <div className="card-body">
                                    {/* <div className="card-body d-flex justify-content-center"> */}
        
                                        <button type="button" onClick={this.buscar} 
                                            className="btn btn-success btn-lg me-2">
                                                <RiFindReplaceLine /> Buscar
                                        </button>
        
                                        <button onClick={this.preparaFormularioCadastro} type="button" 
                                            className="btn btn-primary btn-lg me-2">
                                                <HiUserPlus /> Cadastrar
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                
        
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="bs-component">
        
                                            <ClienteTable clientes={this.state.clientes} 
                                                deleteAction={this.abrirConfirmacaoDeletar}
                                                editAction={this.editar}
                                                detailAction={this.detalhar} />
                                                             
                                            <div className="flex flex-wrap justify-content-center gap-2 mb-2">

                                            </div>
                                        
                                        </div>                                                          
                                    </div>
        
                                    <div>
                                    <Dialog header="Excluir Cliente" 
                                        visible={this.state.showConfirmDialog} 
                                        style={{ width: '50vw' }} 
                                        onHide={() => this.setState({showConfirmDialog: false})} 
                                        modal={true}  //congelar a tela quando o dialog estever aparecendo
                                        footer={confirmDialogFooter}>
                                        <p className="m-0">
                                            Gostaria de Deletar um Cliente sistema?
                                        </p>
                                    </Dialog>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default function ConsultaClienteFunction(props){

    const navigate = useNavigate();
    return(<ConsultClientes navigate={navigate}></ConsultClientes>)

}