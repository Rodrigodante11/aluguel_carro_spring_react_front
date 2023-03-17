import ApiService from "../apiService";
import ErroValidacao from "./exception/erroValidacao";

export default class locacaoService extends ApiService{

    constructor(){
        super('/api/locacao')
    }

    obterPorId(id){
        return this.get(`/${id}`)
    }

    obterTodos(){
        return this.get('')
    }
   
    salvar(locacao){
        return this.post('', locacao)
    }
    deletar(id){
        return this.delete(`/${id}`)
    }

    atualizar(locacao){
        return this.put(`/${locacao.id}`, locacao)
    }

    validar(locacao){
        const erros = []

        if(!locacao.cliente){

            erros.push('O campo Cliente é Obrigatorio')

        }
        if(!locacao.automovel){
            erros.push('O campo Automovel é Obrigatorio')
        }
        
        if(!locacao.locacaoKM){
            erros.push(' O Campo Locação KM é Obrigatorio')
        }
        if(!locacao.valor){
            erros.push(' O Campo Valor é Obrigatorio')
        }
       
        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

}
