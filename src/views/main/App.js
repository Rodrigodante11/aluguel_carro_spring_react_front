
import NavBar from '../../components/navBar';
import Rotas from './rotas';
import { BrowserRouter as Router} from 'react-router-dom';
import ProvedorAutenticacao from './provedorAutenticacao';
import 'bootswatch/dist/flatly/bootstrap.css';
import React from 'react';

function App() {

  return (
    <>
    <ProvedorAutenticacao>
      <Router>
        <div className="App">

            <NavBar />
            <Rotas />

        </div>
      </Router>
    </ProvedorAutenticacao>
    </>
    
  );
}

export default App;
