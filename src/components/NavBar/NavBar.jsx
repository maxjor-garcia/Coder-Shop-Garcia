import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <p>LOGO</p>
            </Link>
            <ul>
                <NavLink to="/category/consolas">
                    <li>
                        <a>Consolas</a>
                    </li>
                </NavLink>
                <NavLink to="/category/juegos">
                    <li>
                        <a>Juegos</a>
                    </li>
                </NavLink>
                <NavLink to="/category/accesorios">
                    <li>
                        <a>Accesorios</a>
                    </li>
                </NavLink>
                <CartWidget />
            </ul>
        </nav>
    );
};

export { NavBar };
