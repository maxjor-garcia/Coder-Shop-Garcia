import React from "react";

const Item = ({ item, onAdd }) => {
    console.log(item);
    return (
        <>
            <p>
                nombre: <span>{item.title}</span>
            </p>
            <p>
                precio: <span>{item.price} </span>
            </p>
            <p>
                description: <span>{item.description}</span>
            </p>
            <p>
                pictureUrl: <span>{item.pictureUrl}</span>
            </p>
            <p>
                id: <span>{item.id}</span>
            </p>
        </>
    );
};

export { Item };
