import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <h1>Mercado de consolas</h1>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a todos'}/>
    </div>
  );
}



export default App;
