import React from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    return (
        <div className="parrafo">
            <p>{props.greeting}</p>
            <ItemList />
        </div>
    );
};

export { ItemListContainer };
