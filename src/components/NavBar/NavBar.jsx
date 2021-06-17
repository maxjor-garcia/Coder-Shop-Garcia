import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Consolas</a></li>
                <li><a href="#">Juegos</a></li>
                <li><a href="#">Accesorios</a></li>
                <CartWidget />
            </ul>
        </nav> 
    )
}

export { NavBar }