import React, { Component } from "react";
import './NavBar.css';
import Carrito from '../Carrito/Carrito';

export default function NavBar() {
    return (
        <>

            <div id="barra">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/categorias/1">Gustos</a></li>
                    <li><a href="/categorias/3">Promociones</a></li>                   
                    <li><a href="#">Contacto</a></li>
                    <li><Carrito /></li>
                </ul>
            </div>

        </>
    )
}




