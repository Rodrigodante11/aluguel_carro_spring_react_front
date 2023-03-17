import {  useParams } from "react-router-dom";
import CarroService from "../../app/service/carroService";
import React from "react";
import {useNavigate} from 'react-router-dom';
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import * as messages from '../../components/toastr'
import { decodeToken } from "react-jwt";

import LocalStorageService from "../../app/service/localstorageService";
import Footer from "../../components/footer";

export class CadastroCarro extends React.Component{

    constructor(){
        super();
        this.carroService = new CarroService();
    }
    
    componentDidMount(){
        const claims = decodeToken(LocalStorageService.obterItem('_acess_token'));
        
        this.setState({ usuario : claims.userid})

        const id = this.props.params.id

        if (String(window.location.href).includes("detalhar")){
            this.setState({detail:true})
        }

        if(id){

            this.setState({ atualizando:true })
            this.carroService.obterPorId(id)
                .then(response => {
                    this.setState({
                        ...response.data, // ... = spread operator = colocar todos propriedades // mostrar todos dados de ataualizar ao usuario 
                        usuario : claims.userid
                    }) 
                
                }).catch(errors => {
                    messages.mensagemErro('Error a Renderezar o Automovel , Aviso o desenvolvedor')
                })
            
        }
    
    }

    state = {
        id: '',
        usuario:'',
        marca: '',
        modelo: '',
        ano: '',
        cor: '',
        placa: '',
        imagem: '',
        tipoCarro: '',
        descricao: '',
        showConfirmDialog: false,
        carrodeletar:{},
        carros: [], 
        atualizando:false,
        detail:false,
        
    }

    handleChande= (event) =>{
        
        const value = event.target.value; // pegando o valor do input
        const name = event.target.name; // pegando o name da Tag

        this.setState({ [name] : value}) // setando os valores
    }

    submit = () => { 
        
        const { 
            marca , modelo , ano, cor, placa, tipoCarro, 
            descricao , usuario

        } = this.state;

        const carro = {
            marca , 
            modelo , 
            ano, 
            cor, 
            placa, 
            tipoCarro, 
            descricao , 
            usuario
        }
        

        try{
            this.carroService.validar(carro)

        }catch(erro){
          
            const mensagens = erro.mensagens;
            mensagens.forEach( msg => messages.mensagemErro(msg));
            return false;
    
        }
  
        this.carroService
            .salvar(carro)
            .then(Response => {
                this.props.navigate('/carros/consultacarros')
                messages.mensagemSucesso('Carro Cadastratado com sucesso!')

            }).catch(error => {
                messages.mensagemErro(error.response.data)
            })
    }

    atualizar = () => {
        const { 
            id, marca , modelo , ano, cor, placa, tipoCarro, 
            descricao , usuario

        } = this.state;

        const carro = {
            id,
            marca , 
            modelo , 
            ano, 
            cor, 
            placa, 
            tipoCarro, 
            descricao , 
            usuario
        }

        try{
            this.carroService.validar(carro)

        }catch(erro){
          
            const mensagens = erro.mensagens;
            mensagens.forEach( msg => messages.mensagemErro(msg));
            return false;
    
        }

        this.carroService
            .atualizar(carro)
            .then(Response => {
                this.props.navigate('/carros/consultaCarros')
                messages.mensagemSucesso('Carro Atualizado com sucesso!')

            }).catch(error => {
                messages.mensagemErro(error.response.data)
            })
  
    }

    render(){
      
        return (
            <>
                <div className="card m-5 bg-light bg-info " >
        
                    <h3 className="card-header d-flex justify-content-center">
                        {this.state.detail ? "Detalhes do carro" 
                            : 
                            this.state.atualizando ? "Atualizar carros" :  "Cadastro de carros"
                        }
                    
                    </h3>

                    <div className="card-body">

                        <div className="row">

                            <div className="col-md-6">
                                <FormGroup id="inputMarca" label="Marca: *">

                                    <input id="inputMarca" 
                                        type="text" 
                                        className="form-control"
                                        name="marca"
                                        value={this.state.marca}
                                        onChange={this.handleChande} 
                                        disabled={this.state.detail}
                                        placeholder="Marca do carro"/>

                                </FormGroup>
                            </div>

                            <div className="col-md-6">
                                <FormGroup id="inputModelo" label="Modelo: *">

                                    <input id="inputModelo" 
                                        type="text" 
                                        className="form-control" 
                                        name="modelo"
                                        value={this.state.modelo}
                                        onChange={this.handleChande} 
                                        disabled={this.state.detail}
                                        placeholder="Modelo do carro"/>
                                </FormGroup>
                            </div>

                        </div>
                
                        <div className="row">

                            <div className="col-md-3">
                                <FormGroup id="inputAno" label="Ano: *">

                                    <input id="inputAno" 
                                        type="number" 
                                        className="form-control"
                                        name="ano"
                                        value={this.state.ano}
                                        onChange={this.handleChande} 
                                        disabled={this.state.detail}
                                        placeholder="Ano do carro"/>

                                </FormGroup>
                            </div>

                            <div className="col-md-3">
                                <FormGroup id="inputPlaca" label="Placa: ">

                                    <input id="inputPlaca" 
                                        type="text" 
                                        className="form-control"
                                        name="placa"
                                        value={this.state.placa}
                                        onChange={this.handleChande} 
                                        disabled={this.state.detail}
                                        placeholder="Placa do carro"/>

                                </FormGroup>
                            </div>

                            <div className="col-md-3">
                                <FormGroup id="inputTipo" label="Tipo : ">

                                    <SelectMenu id="inputTipo" 
                                        className="form-control"
                                        name="tipoCarro"
                                        value={this.state.tipoCarro}
                                        onChange={this.handleChande} 
                                        disabled={this.state.detail} />

                                </FormGroup>
                            </div>

                            <div className="col-md-3">
                                <FormGroup id="inputCor" label="Cor : ">

                                    <input id="inputCor" 
                                        type="text" 
                                        className="form-control"
                                        name="cor"
                                        value={this.state.cor}
                                        onChange={this.handleChande} 
                                        disabled={this.state.detail}
                                        placeholder="Cor carro"/>

                                </FormGroup>
                            </div>
                        
                        </div>

                        <div className="row">
                            
                            <div className="col-md-12">

                                <FormGroup id="inputDescricao" label="Descricao: ">

                                    <textarea id="inputDescricao" rows="3"
                                        className="form-control"
                                        name="descricao"
                                        value={this.state.descricao}
                                        onChange={this.handleChande}  
                                        disabled={this.state.detail}/>       

                                </FormGroup>
                            </div>

                        </div>

                    </div>

                    <div className="card-body d-flex justify-content-center">

                        {this.state.detail ? '' :
                            this.state.atualizando ?  // condicao ternaria para ver se a tela vai para atualizar ou cadastrar carro
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
                    
                        <button onClick={ e => this.props.navigate('/carros/consultacarros')}
                            type="button" className="btn btn-danger btn-lg me-2">
                                <i className="pi pi-times"></i> Voltar
                        </button>

                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

function withRouter(Component) {

    function ComponentWithRouter(props) {
      let params = useParams()

      return <Component {...props} params={params} />
    }
    return ComponentWithRouter
}

export default function CadastroCarroFunction(){
 
    const HOCTaskDetail = withRouter(CadastroCarro);

    const navigate = useNavigate();
    return(<HOCTaskDetail navigate={navigate}></HOCTaskDetail>)

}