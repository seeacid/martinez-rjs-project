import React from "react";
import './index.css';
import logo from "./starlogo.png"
import { CarWidget } from "../carWidget/CarWidget";

export function Header(){
    return(
        <header className="headder-wrapper">
        <div className="logo-wrapper">
            <img className="logo" src={logo} alt="" />
            <p>Stardead</p>
        </div>
        <nav>
            <a href="/">Inicio</a>
            <a href="/">Productos</a>
            <a href="/">Ofertas</a>
            <a href="/">Re-Sellers</a>
            <CarWidget />   
            
        </nav>
    </header>
    )
}