import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "../home";
import ConsultCarros from "../carros/consultaCarros";
import ConsultClientes from "../clientes/consultaClientes";
import Login from "../login";
import LogSystem from "../logSystem";

const Rotas = () => {
   return(
        <Router>
            <Routes>
                <Route element = { <Home /> } path="/" ></Route>
                <Route element = { <ConsultClientes /> }  path="/clientes/consultaClientes" ></Route>
                <Route element = { <ConsultCarros />}  path="/carros/consultaCarros" ></Route>
                <Route element = { <Login />}  path="/login" ></Route>
                <Route element = { <LogSystem />}  path="/logsystem" ></Route>
            </Routes>
        </Router>
   )
}

export default Rotas;