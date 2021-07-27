import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [contador, setContador] = useState(inicial);
    const [nuevoStock, setStock] = useState(stock);

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
            setStock(nuevoStock + 1);
        }
    };

    const sumar = () => {
        if (nuevoStock !== 0) {
            setContador(contador + 1);
            setStock(nuevoStock - 1);
        }
    };

    // const agregar = () => {
    //     alert(`Agregaste ${contador} al carrito`);
    // };

    return (
        <>
            <div className="itemcount">
                <p>{nuevoStock} en stock</p>
                <button className="boton" onClick={restar}>
                    -
                </button>
                <span>{contador}</span>
                <button className="boton" onClick={sumar}>
                    +
                </button>
                <button
                    disabled={!contador}
                    className="boton"
                    onClick={(e) => onAdd(contador)}
                >
                    Comprar
                </button>
            </div>
        </>
    );
};

export { ItemCount };
