import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "../home";
import ConsultCarros from "../carros/consultaCarros";
import ConsultClientes from "../clientes/consultaClientes";
import LogSystem from "../logSystem";
import { LoginFunction } from "../login";


const Rotas = () => {
   return(
        <Routes>
            <Route element = { <Home /> } path="/home" ></Route>
            <Route element = { <ConsultClientes /> }  path="/clientes/consultaClientes" ></Route>
            <Route element = { <ConsultCarros />}  path="/carros/consultaCarros" ></Route>
            <Route element = { <LoginFunction />}  path="/login" ></Route>
            <Route element = { <LogSystem />}  path="/logsystem" ></Route>
        </Routes>
   )
}

export default Rotas;