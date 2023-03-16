import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "../home";
import ConsultCarros from "../carros/consultaCarros";

import CadastroClienteFunction from "../clientes/cadastroCliente";
import ConsultaClienteFunction from "../clientes/consultaClientes";

import LogSystem from "../logSystem";
import LoginFunction from "../login";


const Rotas = () => {
   return(
        <Routes>
            <Route element = { <Home /> } path="/home" ></Route>
            <Route element = { <ConsultaClienteFunction /> }  path="/clientes/consultaClientes" ></Route>
            <Route element = { <ConsultCarros />}  path="/carros/consultaCarros" ></Route>
            <Route element = { <LoginFunction />}  path="/login" ></Route>
            <Route element = { <LogSystem />}  path="/logsystem" ></Route>
            <Route element = { <LoginFunction />}  path="" ></Route>
            <Route element = { <CadastroClienteFunction />}  path="/clientes/cadastroClientes/:id?" ></Route>
            <Route element = { <CadastroClienteFunction />}  path="/clientes/cadastroClientes/detalhar/:id?" ></Route>
        </Routes>
   )
}

export default Rotas;