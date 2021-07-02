import React from "react";
import "./ItemDetailContainer.css";
import { ItemDetail } from "../../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [catalogo1, setCatalogo1] = useState([]);

    const prod = [
        {
            id: "1",
            title: "The Witcher 3",
            pictureUrl:
                "https://images-na.ssl-images-amazon.com/images/I/91YuZ-kasRL._SY445_.jpg",
            description: "RPG - Action-RPG",
            price: "$60",
        },
    ];

    useEffect(() => {
        const nuevaPromesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(prod);
            }, 2000);
        });

        nuevaPromesa.then((res) => {
            console.log(res);
            setCatalogo1(res);
        });
    }, []);

    return (
        <>
            <ItemDetail items={catalogo1} />
        </>
    );
};

export { ItemDetailContainer };
