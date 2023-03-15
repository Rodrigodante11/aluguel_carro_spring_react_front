import ApiService from "../apiService";
// import ErroValidacao from "./exception/erroValidacao";

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

}

    

    
