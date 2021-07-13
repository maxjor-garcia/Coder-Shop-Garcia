import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/category/:id">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/item/:id">
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

// function App() {
//     return (
//         <div className="App">
//             <h1>Mercado de consolas</h1>
//             <NavBar />
//             <ItemListContainer />
//             <ItemCount inicial={1} stock={10} onAdd={"nada"} />
//         </div>
//     );
// }
