import toastr from "toastr";
import 'toastr/build/toastr.css';
import '../../node_modules/toastr/toastr'
import '../../node_modules/toastr/package-lock.json'
import '../../node_modules/toastr/package.json'
import '../../node_modules/toastr/toastr'
import '../../node_modules/toastr/toastr-icon.png'
import '../../node_modules/toastr/toastr.less'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  
  export function mostrarMensagem(tipo, mensagem, titulo){
      toastr[tipo](mensagem, titulo)
  
  }
  
  export function mensagemErro(mensagem){
      mostrarMensagem('error', mensagem, 'Erro')
  }
  
  export function mensagemSucesso(mensagem){
      mostrarMensagem('success', mensagem, 'Sucesso')
  }
  
  export function mensagemAlerta(mensagem){
      mostrarMensagem('warning', mensagem, 'Warning')
  }
  