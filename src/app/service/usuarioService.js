import ApiService from "../apiService";
import ErroValidacao from "./exception/erroValidacao";

class UsuarioService extends ApiService{

    constructor(){
        super('/api/usuario')
    }

    autenticar(credencias){
        return this.post( '/autenticar', credencias)
    }

    salvar(usuario){
        return this.post('', usuario)
    }

    validar(usuario){
        const erros = []

        if(!usuario.nome){

            erros.push('O campo Nome é Obrigatorio')

        }
        if(!usuario.email){
            erros.push('O campo Email é Obrigatorio')
        }
        else if( !usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            erros.push(' Informe um email Valido')
        }

        if(!usuario.senha){
            erros.push(' Informe a senha')
        }
        if(!usuario.senhaConfirmacao)
        {
            erros.push('O campo confirmacao de senha é Obrigatorio')
        }
        if(usuario.senha !== usuario.senhaConfirmacao){
            erros.push('As senha nao combinam!')
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

}

export default UsuarioService;