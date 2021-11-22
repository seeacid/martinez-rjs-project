import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'
import "./ItemDetail.css"

export const ItemDetail = ({id , name , img , price, stock}) => {


    return(
        <div className="itemDetailWrapper">
            <img className="itemDetailImg" src={img} alt={`${id}-${name}`} />

            <h1 className="itemDetailTitle">{name}</h1>
            <ul className="itemDetailList">
                <li>100% Algodon</li>
                <li>Estampa en Serigrafia</li>
                <li>Talles Oversize</li>
                <li>Costura reforzada</li>
            </ul>

            <h2>${price}</h2>
            <p>Unidades disponibles:{stock}</p>
            <ItemCount stock={stock} initial="0" />
            <button className="itemDetailButton">Agregar al carrito</button>
        </div>
    )
}

