import logo from './logo.svg';
import './App.css';
import { Compo1 } from './componentes/Compo1';
import { Compo2 } from './componentes/compo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Probando react
        </p>

        <Compo1/>     
        <Compo2/>


       </header>
    </div>
  );
}

export default App;
