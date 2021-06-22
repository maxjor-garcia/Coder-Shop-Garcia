import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";

function App() {
    return (
        <div className="App">
            <h1>Mercado de consolas</h1>
            <NavBar />
            <ItemListContainer greeting={"Bienvenidos a todos"} />
            <ItemCount inicial={1} stock={10} onAdd={"nada"} />
        </div>
    );
}

export default App;
