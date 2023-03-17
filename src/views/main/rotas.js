import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "../home";

import ConsultacarroFunction from "../carros/consultaCarros";
import CadastroClienteFunction from "../clientes/cadastroCliente";
import ConsultaClienteFunction from "../clientes/consultaClientes";
import CadastroCarroFunction from "../carros/cadastroCarro";
import ConsultaLocacaoFunction from "../locacao/consultaLocacao";
import CadastrolocacaoFunction from "../locacao/locacaoCadastro";

import LogSystem from "../logSystem";
import LoginFunction from "../login";


const Rotas = () => {
   return(
        <Routes>
            <Route element = { <Home /> } path="/home" ></Route>
            
            <Route element = { <LoginFunction />}  path="/login" ></Route>
            <Route element = { <LogSystem />}  path="/logsystem" ></Route>
            <Route element = { <LoginFunction />}  path="" ></Route>

            <Route element = { <ConsultaClienteFunction /> }  path="/clientes/consultaClientes" ></Route>
            <Route element = { <CadastroClienteFunction />}  path="/clientes/cadastroClientes/:id?" ></Route>
            <Route element = { <CadastroClienteFunction />}  path="/clientes/cadastroClientes/detalhar/:id?" ></Route>
            
            <Route element = { <ConsultacarroFunction />}  path="/carros/consultaCarros" ></Route>
            <Route element = { <CadastroCarroFunction />}  path="/carros/cadastroCarros/:id?" ></Route>
            <Route element = { <CadastroCarroFunction />}  path="/carros/cadastroCarros/detalhar/:id?" ></Route>

            <Route element = { <ConsultaLocacaoFunction />}  path="/locacao/consultaLocacao" ></Route>
            <Route element = { <CadastrolocacaoFunction />}  path="/locacao/cadastroLocaca/:id?" ></Route>
            <Route element = { <CadastrolocacaoFunction />}  path="/locacao/cadastroLocaca/detalhar/:id?" ></Route>
        </Routes>
   )
}

export default Rotas;