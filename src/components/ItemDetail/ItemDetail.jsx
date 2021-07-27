import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ item }) => {
    const [contador, setContador] = useState(0);
    // const history = useHistory();

    const { addItem } = useContext(CartContext);

    const onAdd = (contador) => {
        if (contador > 0) {
            setContador(contador);
            addItem(item, contador);
            event.target.classList.add("hide");
        } else {
            alert("Minimo un item para la compra");
        }
    };

    // const finishPurchase = () => {
    //     history.push("/cart");
    // };

    // {!contador && (
    //     <ItemCount inicial={1} stock={10} onAdd={onAdd}></ItemCount>
    // )}
    // {!!contador && (
    //     <button onClick={!contador}>Terminar mi compra</button>
    // )}

    return (
        <div className="item-detail">
            <ul>
                <li>Nombre</li>
                <li>Detalle</li>
                <li>Foto</li>
                <li>Precio</li>
            </ul>
            <ItemCount inicial={1} stock={10} onAdd={onAdd}></ItemCount>
            <Link to="/cart">
                <button disabled={!contador}>Terminar mi compra</button>
            </Link>
        </div>
    );
};

export { ItemDetail };
