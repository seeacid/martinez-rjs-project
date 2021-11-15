import React, {useState } from 'react'
import "./index.css"
import {ItemList} from "./Itemlist"
import { products } from './Items'

export function ItemListContainer(props){

    const [items,setItem]=useState([])

    const bringProducts = new Promise ((resolve, reject) =>{
        setTimeout( ()=> {
            resolve(products)
        },2000)
    })

    bringProducts.then((res)=> {
        setItem(res)
    })
    .catch((error)=>{
        console.log(error)

    })

    return(
        <div className="greetings">
            <ItemList items={items} />
            
        </div>
    )
}