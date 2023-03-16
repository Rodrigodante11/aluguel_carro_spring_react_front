import ApiService from "../apiService";
import ErroValidacao from "./exception/erroValidacao";

export default class ClienteService extends ApiService{

    constructor(){
        super('/api/cliente')
    }

    obterPorId(id){
        return this.get(`/${id}`)
    }

    obterTodos(){
        return this.get('')
    }
    obterPornome(nome){
        return this.post('/nome',nome)
    }
    salvar(cliente){
        return this.post('', cliente)
    }
    deletar(id){
        return this.delete(`/${id}`)
    }

    atualizar(cliente){
        return this.put(`/${cliente.id}`, cliente)
    }

    validar(cliente){
        const erros = []

        if(!cliente.nome){

            erros.push('O campo Nome é Obrigatorio')

        }
        if(!cliente.email){
            erros.push('O campo Email é Obrigatorio')
        }
        else if( !cliente.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            erros.push(' Informe um Email Valido')
        }

        if(!cliente.idade){
            erros.push(' O Campo Idade é Obrigatorio')
        }
        if(!cliente.cpf){
            erros.push(' O Campo CPF é Obrigatorio')
        }
        if(!cliente.cidade){
            erros.push(' O Campo Cidade é Obrigatorio')
        }
        if(!cliente.estado){
            erros.push(' O Campo Estado é Obrigatorio')
        }
        
        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

}

    

    
