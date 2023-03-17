import React from "react";
import {  useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";

import LocacaoService from "../../app/service/locacaoService";
import ClienteService from "../../app/service/ClienteService";
import CarroService from "../../app/service/carroService";

import * as messages from '../../components/toastr'
import Footer from "../../components/footer";

export class CadastroLocaco extends React.Component{

  constructor(){
    super();
    this.locacaoService = new LocacaoService();
    this.clienteService = new ClienteService();
    this.carroService = new CarroService();
  }

  componentWillMount(){

    const id = this.props.params.id

    if (String(window.location.href).includes("detalhar")){
      this.setState({detail:true})
    }

    if(id){

      this.setState({ atualizando:true })
      this.locacaoService.obterPorId(id)
          .then(response => {
              this.setState({
                  ...response.data, // ... = spread operator = colocar todos propriedades // mostrar todos dados de ataualizar ao usuario 
                  
              }) 
          
          }).catch(errors => {
              messages.mensagemErro('Error a Renderezar o Automovel , Aviso o desenvolvedor')
          })
      
    }

    this.clienteService
        .obterTodos()
        .then( response =>{
            const lista = response.data;

            if(lista.length <1){
                messages.mensagemAlerta("Nenhum Cliente Cadastrado para cadastro de Locação")
            }
               
            this.setState({ clientes : lista})
       
        }).catch( error =>{
            messages.mensagemAlerta(" Por favor faça Login no sistema")
        })

    this.carroService
      .obterTodos()
      .then( response =>{
          
          const lista = response.data;

          if(lista.length <1){
              messages.mensagemAlerta("Nenhum Automovel Cadastrado para cadastro de Locação")
          }
              
          this.setState({ carros : lista})
          
      }).catch( error =>{
          messages.mensagemAlerta(" Por favor faça Login no sistema")
      })
  }

  state = {
    cliente: '',
    automovel: '',
    valor: '',
    locacaoKM: '',

    clientes: [],
    automovels: [],
  
    showConfirmDialog: false,
    locacaodeletar:{},
    locacaos: [], 

    atualizando:false,
    detail:false,
  }

  submit = () => { 

    const { 
      cliente , automovel , valor, locacaoKM

    } = this.state;

    const locacao = {
        cliente,
        automovel,
        valor,
        locacaoKM
    }

    try{
      this.locacaoService.validar(locacao)

  }catch(erro){
    
      const mensagens = erro.mensagens;
      mensagens.forEach( msg => messages.mensagemErro(msg));
      return false;

  }

  this.locacaoService
      .salvar(locacao)
      .then(Response => {
          this.props.navigate('/locacao/consultaLocacao')
          messages.mensagemSucesso('Locação Cadastratado com sucesso!')

      }).catch(error => {
          messages.mensagemErro(error.response.data)
      })

  }

  atualizar = () => { 

    const { 
      id, cliente , automovel , valor, locacaoKM

    } = this.state;

    const locacao = {
        id,
        cliente,
        automovel,
        valor,
        locacaoKM
    }

    try{
      this.locacaoService.validar(locacao)

  }catch(erro){
    
      const mensagens = erro.mensagens;
      mensagens.forEach( msg => messages.mensagemErro(msg));
      return false;

  }

  this.locacaoService
      .atualizar(locacao)
      .then(Response => {
          this.props.navigate('/locacao/consultaLocacao')
          messages.mensagemSucesso('Locação Cadastratado com sucesso!')

      }).catch(error => {
          messages.mensagemErro(error.response.data)
      })

  }

  handleChande= (event) =>{
        
    const value = event.target.value; // pegando o valor do input
    const name = event.target.name; // pegando o name da Tag

    this.setState({ [name] : value}) // setando os valores

  }

  render(){
    
    return (
      <>
        <div className="card m-5 bg-light bg-info " >
        
          <h3 className="card-header d-flex justify-content-center">
              {this.state.detail ? "Detalhes da Locação" 
                  : 
                  this.state.atualizando ? "Atualizar Locação" :  "Cadastro de Locação"
              }
          
          </h3>

          <div className="card-body ">

            <div className="row">

              <div className="col-md-6">
                  <FormGroup id="inputvalor" label="Valor: *">

                      <input id="inputvalor" 
                          type="number" 
                          className="form-control"
                          name="valor"
                          value={this.state.valor}
                          onChange={this.handleChande} 
                          disabled={this.state.detail}
                          placeholder="Valor da Locação"/>

                  </FormGroup>
              </div>

              <div className="col-md-6">
                  <FormGroup id="inputlocacaoKM" label="KM : *">

                      <input id="inputlocacaoKM" 
                          type="text" 
                          className="form-control" 
                          name="locacaoKM"
                          value={this.state.locacaoKM}
                          onChange={this.handleChande} 
                          disabled={this.state.detail}
                          placeholder="KM da Locação"/>
                  </FormGroup>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6">

                
                <FormGroup id="inputCliente" label="Cliente : *">

                    <SelectMenu id="inputCliente" 
                        className="form-control"
                        name="cliente"
                        value={new Set(this.state.clientes )}
                        onChange={this.handleChande} 
                        disabled={this.state.detail} />

                </FormGroup>
              </div>

              <div className="col-md-6">
                <FormGroup id="inputAutomovel" label="Automovel : *">

                    <SelectMenu id="inputAutomovel" 
                        className="form-control"
                        name="automovel"
                        value={new Set(this.state.carros )}
                        onChange={this.handleChande} 
                        disabled={this.state.detail} />

                </FormGroup>
              </div>
            </div>

            <div className="card-body d-flex justify-content-center">
              {this.state.detail ? '' :
                  this.state.atualizando ?  // condicao ternaria para ver se a tela vai para atualizar ou cadastrar carro
                  (
                      <button onClick={this.atualizar} type="button" 
                              className="btn btn-primary btn-lg me-4">
                              Atualizar
                      </button>   

                  ) : (
                      <button onClick={this.submit} type="button" 
                              className="btn btn-success btn-lg me-4">
                                Salvar
                      </button>
                  )
              }

              <button onClick={ e => this.props.navigate('/locacao/consultaLocacao')}
                  type="button" className="btn btn-danger btn-lg me-2">
                       Voltar
              </button>

            </div>
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

export default function CadastrolocacaoFunction(){
 
    const HOCTaskDetail = withRouter(CadastroLocaco);

    const navigate = useNavigate();
    return(<HOCTaskDetail navigate={navigate}></HOCTaskDetail>)

}