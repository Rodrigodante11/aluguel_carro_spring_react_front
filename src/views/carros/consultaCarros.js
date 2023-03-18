import React from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";

import CarroService from "../../app/service/carroService";

import {useNavigate} from 'react-router-dom';

import { Button } from 'primereact/button';
import { Dialog } from "primereact/dialog";

import FormGroup from "../../components/form-group";
import CarroTable from "./carroTable";

import { RiFindReplaceLine } from "react-icons/ri";
import { HiUserPlus } from "react-icons/hi2";

import * as messages from '../../components/toastr'
import Footer from "../../components/footer";

export class ConsultaCarros extends React.Component{

    constructor(){
        super();
        this.carroService = new CarroService();
    }
    
    async componentDidMount(){

        await this.carroService
            .obterTodos()
            .then( response =>{
               
                const lista = response.data;
    
                if(lista.length <1){
                    messages.mensagemAlerta("Nenhum resultado foi encontrado")
                }
                   
                this.setState({ carros : lista})
                
            }).catch( error =>{
                messages.mensagemAlerta(" Por favor faça Login no sistema")
            })
    }

    state = {
        marca: '',
        modelo: '',
        ano: '',
        cor: '',
        placa: '',
        imagem: '',
        tipoCarro: '',
        usuario: '',
        descricao: '',
        showConfirmDialog: false,
        carrodeletar:{},
        carros: [], 
    }

    buscar = () =>{
        
        const carroFiltro = {
            marca: this.state.marca,
            modelo: this.state.modelo
         
        }
        
        this.carroService
            .obterPorMarca(carroFiltro)
            .then( response =>{
                const lista = response.data;
    
                if(lista.length <1){
                    messages.mensagemAlerta("Nenhum resultado foi encontrado")
                }
                   
                this.setState({ carros : lista})
                
            }).catch( error =>{
                console.log(error)
            })
    }

    editar = (id) =>{
        
        this.props.navigate(`/carros/cadastroCarros/${id}`)
    }
    detalhar = (id) =>{
        
        this.props.navigate(`/carros/cadastroCarros/detalhar/${id}`)
 
    }

    abrirConfirmacaoDeletar = (carro) =>{
      
        this.setState({ showConfirmDialog: true , carrodeletar: carro})
        
    }
    cancelarDelecao =() =>{
        this.setState({ showConfirmDialog: false , carrodeletar: {} })
    }

    deletar = () =>{
        
        this.carroService
            .deletar(this.state.carrodeletar.id)
            .then(response => {

                // comandos abaixo foi so para atualizar a pagina pois o item ja foi deletado 
                // entrando nesse metodo
                const carrosConst = this.state.carros // pegando todos carros 
                const indexParaDeletar = carrosConst.indexOf(this.carroDeletar) // descobrindo o index do excluido

                carrosConst.splice(indexParaDeletar, 1) // deletando o excluido
                this.setState({carros: carrosConst}) // setando a nova lista
                

                messages.mensagemSucesso('carro deletado com Sucesso')
                this.setState({ showConfirmDialog: false , carroDeletar: {}})
                
            }).catch(error =>{
                messages.mensagemErro(' Erro ao tentar deletar o carro, Possivelmente esta sendo usado em uma Locação')
                
            }).finally(() =>{
                this.setState({ carroDeletar: {}})
                
            })
       
    }

    preparaFormularioCadastro =() => {
        this.props.navigate('/carros/cadastroCarros')
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
                <div className="container mt-5">
                    <div className='card m-5 bg-light bg-info' >
                        
                        <h3 className="card-header d-flex justify-content-center">
                            Consulta de Carros
                        </h3>

                        <div className="card-body">
                    
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="bs-component">

                                        <FormGroup htmlFor="inputNome" label="Marca do Carro: ">
                                            <input type="text" 
                                                className="form-control" 
                                                id="inputNome"
                                                value={this.state.marca}
                                                onChange={ e => this.setState({ marca: e.target.value})}                               
                                                placeholder="Digite a marca" />
                                        </FormGroup>

                                    

                                        <div className="card-body">
                                        {/* <div className="card-body d-flex justify-content-center"> */}

                                            <button type="button" onClick={this.buscar} 
                                                className="btn btn btn-success btn-lg me-2">
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
                                    <div className="bs-component">

                                        <CarroTable carros={this.state.carros} 
                                            deleteAction={this.abrirConfirmacaoDeletar}
                                            editAction={this.editar}
                                            detailAction={this.detalhar} />
                                                            
                                        <div className="flex flex-wrap justify-content-center gap-2 mb-2">

                                        </div>
                                    
                                    </div>                                                          
                                </div>

                                <div>
                                    <Dialog header="Excluir Carro" 
                                        visible={this.state.showConfirmDialog} 
                                        style={{ width: '50vw' }} 
                                        onHide={() => this.setState({showConfirmDialog: false})} 
                                        modal={true}  //congelar a tela quando o dialog estever aparecendo
                                        footer={confirmDialogFooter}>
                                        <p className="m-0">
                                            Gostaria de Deletar um Carro do Sistema?
                                        </p>
                                    </Dialog>
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

export default function ConsultacarroFunction(props){

    const navigate = useNavigate();
    return(<ConsultaCarros navigate={navigate}></ConsultaCarros>)

}