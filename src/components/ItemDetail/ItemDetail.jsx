import React from "react";

const ItemDetail = ({ item, onAdd }) => {
    console.log(item);
    return (
        <div>
            <ul>
                <li>Nombre</li>
                <li>Detalle</li>
                <li>Foto</li>
                <li>Precio</li>
            </ul>
        </div>
    );
};

export { ItemDetail };
