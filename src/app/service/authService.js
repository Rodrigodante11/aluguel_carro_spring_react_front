import LocalStorageService from "./localstorageService";
import ApiService from "../apiService";

export default class AuthService {

    static isUsuarioAutenticado (){

        const token = LocalStorageService.obterItem('_acess_token')
        if(!token){
            return false;
        }
      
        return true
    
    }

    static removerUsuarioLogado (){

        LocalStorageService.removerItem('_usuario_logado')
        LocalStorageService.removerItem('_acess_token')

    }

    static logar(usuario){
       
        LocalStorageService.addItem('_usuario_logado', usuario.nome)
        LocalStorageService.addItem('_acess_token', usuario.token)

        ApiService.registrarToken(usuario.token)

    }

    static obterUsuarioAutenticado(){

        return LocalStorageService.obterItem('_usuario_logado')
    }

    static obtertoken(){

        return LocalStorageService.obterItem('_acess_token')
    } 

    static refreshSession(){
        const token  = LocalStorageService.obterItem('_acess_token')
        const usuario = AuthService.obterUsuarioAutenticado()
        AuthService.logar(usuario, token)
        return usuario;
    }
}