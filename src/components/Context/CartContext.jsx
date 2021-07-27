import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [products, setProducts] = useState([]);
    const [cantidadCarro, setCantidadCarro] = useState(0);

    console.log("products:", products);

    function addItem(items, cantidad) {
        console.log("items:", items);
        const isInCart = products.some(
            (product) => product.item.id === items[0].id
        );
        if (isInCart) {
            //crea un producto nuevo y lo agrega a productos
            const nuevoItem = {
                item: {
                    title: items[0].title,
                    id: items[0].id,
                    picture: items[0].picture,
                    price: items[0].price,
                },
                quantity: cantidad,
            };
            setProducts([...products, nuevoItem]);
        } else {
            products.forEach((product) => {
                if (product.item.id == items[0].id) {
                    return (product.quantity += cantidad);
                }
            });
            setProducts([...products]);
        }
    }

    // Actualiza el circulo rojo del carrito
    function circuloRojoCarrito() {
        let total = 0;
        if (products.length > 0) {
            products.forEach((product) => {
                total += product.quantity;
            });
        }
        console.log("total:", total);
        setCantidadCarro(total);
    }

    //Agregar cierta cantidad de un item al carrito
    function addItem(item, cantidad) {
        products.forEach((product) => {
            if (product.item.id == item.id) {
                return (product.quantity += cantidad);
            }
        });
        setProducts([...products]);
    }

    const isInCart = (item) => {
        cart.map((prod) => {
            prod;
        });
    };

    return (
        <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
    );
};
