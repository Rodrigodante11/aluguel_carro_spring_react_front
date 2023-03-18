import React from "react";

// import { FcMultipleDevices } from "react-icons/fc";
import {useNavigate} from 'react-router-dom';

import { Button } from 'primereact/button';
import { Dialog } from "primereact/dialog";

import LocacaoTable from "./locacaoTable";
import LocacaoService from "../../app/service/locacaoService";

import * as messages from '../../components/toastr'
import { HiUserPlus } from "react-icons/hi2";

import Footer from "../../components/footer";

export class LocacaoConsulta extends React.Component{

    constructor(){
        super();
        this.locacaoService = new LocacaoService();
    }

    async componentDidMount(){

        await this.locacaoService
            .obterTodos()
            .then( response =>{
               
                const lista = response.data;
    
                if(lista.length <1){
                    messages.mensagemAlerta("Nenhum resultado foi encontrado")
                }
                   
                this.setState({ locacaos : lista})
                
            }).catch( error =>{
                messages.mensagemAlerta(" Por favor faça Login no sistema")
            })
    }

    state = {
        clientes: '',
        locacao: '',
        valor: '',
        locacaoKM: '',
      
        showConfirmDialog: false,
        locacaodeletar:{},
        locacaos: [], 
    }

    editar = (id) =>{
        
        this.props.navigate(`/locacao/cadastroLocaca/${id}`)
    }
    detalhar = (id) =>{
        
        this.props.navigate(`/locacao/cadastroLocaca/detalhar/${id}`)
 
    }

    abrirConfirmacaoDeletar = (locacao) =>{
      
        this.setState({ showConfirmDialog: true , locacaodeletar: locacao})
        
    }

    cancelarDelecao =() =>{
        this.setState({ showConfirmDialog: false , locacaodeletar: {} })
    }

    preparaFormularioCadastro =() => {
        this.props.navigate('/locacao/cadastroLocaca')
    }

    deletar = () =>{
     
        this.locacaoService
            .deletar(this.state.locacaodeletar.id)
            .then(response => {
    
                // comandos abaixo foi so para atualizar a pagina pois o item ja foi deletado 
                // entrando nesse metodo
                const locacaoConst = this.state.locacaos // pegando todos carros 
                const indexParaDeletar = locacaoConst.indexOf(this.locacaodeletar) // descobrindo o index do excluido
    
                locacaoConst.splice(indexParaDeletar, 1) // deletando o excluido
                this.setState({carros: locacaoConst}) // setando a nova lista
                
    
                messages.mensagemSucesso('Locacao deletado com Sucesso')
                this.setState({ showConfirmDialog: false , locacaodeletar: {}})
                
            }).catch(error =>{
                messages.mensagemErro(' Erro ao tentar deletar Uma Locacao, Relate Ao Desenvolvedor')
                
            }).finally(() =>{
                this.setState({ locacaodeletar: {}})
                
            })
       
      }

    render(){

        const confirmDialogFooter = (
            <div>
                <Button label="Confirmar" icon="pi pi-check" onClick={this.deletar} className="p-button-text" />
                
                <Button label="Cancelar" icon="pi pi-times"  onClick={this.cancelarDelecao} autoFocus />
            </div>
        );

        return (
            <>
                <div className="container mt-5">
                    <div className='card m-5 bg-light bg-info' >
                                        
                            <h3 className="card-header d-flex justify-content-center">
                                Consulta de locações
                            </h3>

                            <div className="card-body ">
                                
                                <div className="d-flex justify-content-center ">
                            <button onClick={this.preparaFormularioCadastro} type="button" 
                                    className="btn btn-primary btn-lg me-2 mb-4 text-center">
                                        <HiUserPlus /> Cadastrar Nova Locação
                            </button> 
                            </div>

                            <div className="col-md-12">
                                    <div className="bs-component">

                                        <LocacaoTable locacaos={this.state.locacaos} 
                                            deleteAction={this.abrirConfirmacaoDeletar}
                                            editAction={this.editar}
                                            detailAction={this.detalhar} />
                                                            
                                        <div className="flex flex-wrap justify-content-center gap-2 mb-2">

                                        </div>
                                    
                                    </div>                                                          
                                </div>

                                <div>
                                    <Dialog header="Excluir locacao" 
                                        visible={this.state.showConfirmDialog} 
                                        style={{ width: '50vw' }} 
                                        onHide={() => this.setState({showConfirmDialog: false})} 
                                        modal={true}  //congelar a tela quando o dialog estever aparecendo
                                        footer={confirmDialogFooter}>
                                        <p className="m-0">
                                            Gostaria de Deletar um locação do Sistema?
                                        </p>
                                    </Dialog>
                                </div>
                        </div>
                    </div>
                </div>
                <Footer />            
            </>
        )
    }
}

export default function ConsultaLocacaoFunction(props){

    const navigate = useNavigate();
    return(<LocacaoConsulta navigate={navigate}></LocacaoConsulta>)

}