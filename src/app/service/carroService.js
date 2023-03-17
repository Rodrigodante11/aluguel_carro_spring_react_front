import ApiService from "../apiService";
import ErroValidacao from "./exception/erroValidacao";

export default class CarroService extends ApiService{

    constructor(){
        super('/api/automovel')
    }

    obterPorId(id){
        return this.get(`/${id}`)
    }

    obterTodos(){
        return this.get('')
    }
    obterPorMarca(marca){
        return this.post('/marca',marca)
    }
    salvar(automovel){
        return this.post('', automovel)
    }
    deletar(id){
        return this.delete(`/${id}`)
    }

    atualizar(automovel){
        return this.put(`/${automovel.id}`, automovel)
    }

    validar(automovel){
        const erros = []

        if(!automovel.marca){

            erros.push('O campo Marca é Obrigatorio')

        }
        if(!automovel.modelo){
            erros.push('O campo modelo é Obrigatorio')
        }
       
        if(!automovel.ano){
            erros.push(' O Campo Ano é Obrigatorio')
        }
        if(!automovel.placa){
            erros.push(' O Campo Placa é Obrigatorio')
        }
        if(!automovel.tipoCarro){
            erros.push(' O Campo Tipo é Obrigatorio')
        }
       
        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

}
