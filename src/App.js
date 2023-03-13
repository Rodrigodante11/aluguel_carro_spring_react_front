// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar';
// import { Footer } from './components/footer';
import Login from './views/login';

import 'bootswatch/dist/flatly/bootstrap.css';

function App() {
  return (
 
    <div className="App">
        <NavBar />
        <div>
          <Login />
        </div>
        
    </div>
  );
}

export default App;
