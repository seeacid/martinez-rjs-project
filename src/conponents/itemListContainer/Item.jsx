import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'
import "./items.css"


export const Item = ({ item }) => {

    return(
        <div className="productWrapper">
            <img src={item.img} alt="" className="productImg" />
            <h1 className="productTittle">{item.name}</h1>
            <p className="productPrice">${item.price}</p>
            
            <ItemCount stock={item.stock} initial="0" />
        </div>
    )
}
