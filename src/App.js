import NavBar from './components/navBar';
import Rotas from './views/main/rotas';
import { BrowserRouter as Router} from 'react-router-dom';

import 'bootswatch/dist/flatly/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          
          <Rotas />

      </div>
    </Router>
  );
}

export default App;
