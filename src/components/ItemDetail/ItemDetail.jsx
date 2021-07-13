import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    const [contador, setContador] = useState(0);
    const history = useHistory();

    const onAdd = (quantity) => {
        setContador(quantity);
    };

    const finishPurchase = () => {
        history.push("/cart");
    };

    return (
        <div className="item-detail">
            <ul>
                <li>Nombre</li>
                <li>Detalle</li>
                <li>Foto</li>
                <li>Precio</li>
            </ul>
            {!contador && (
                <ItemCount inicial={1} stock={10} onAdd={onAdd}></ItemCount>
            )}
            {!!contador && (
                <button onClick={finishPurchase}>Terminar mi compra</button>
            )}
        </div>
    );
};

export { ItemDetail };
