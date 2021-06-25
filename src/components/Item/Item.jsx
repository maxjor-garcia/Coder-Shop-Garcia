import React from "react";

const Item = new promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola");
    }, 2000);
});

Item.then((saludo) => {
    console.log(`Recibi mi saludo con ${saludo}`);
});

export { Item };
