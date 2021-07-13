import React from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { id } = useParams();
    const [catalogo, setCatalogo] = useState([]);

    console.log(id);

    const prod = [
        {
            id: "1",
            title: "The Witcher 3",
            pictureUrl:
                "https://images-na.ssl-images-amazon.com/images/I/91YuZ-kasRL._SY445_.jpg",
            description: "RPG - Action-RPG",
            price: "$60",
            categoryId: "juegos",
        },
        {
            id: "2",
            title: "Nintendo Switch",
            pictureUrl:
                "https://www.ladgeek.com/wp-content/uploads/2020/08/Wasteland-3-PC-Full-Version-Free-Game-Download.jpg",
            description: "RPG - Turn Action-RPG",
            price: "$50",
            categoryId: "consolas",
        },
        {
            id: "3",
            title: "Teclado",
            pictureUrl:
                "https://upload.wikimedia.org/wikipedia/en/7/76/Grim_Fandango_artwork.jpg",
            description: "Aventura Grafica",
            price: "$20",
            categoryId: "accesorios",
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
            setCatalogo(res);
        });
    }, []);

    return (
        <>
            <ItemList items={catalogo} />
        </>
    );
};

export { ItemListContainer };
