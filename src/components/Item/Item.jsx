import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item, onAdd }) => {
    console.log(item);
    return (
        <Link to={`/item/${item}`}>
            <article>
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
            </article>
        </Link>
    );
};

export { Item };
