import React, { useState } from 'react'
import "./index.css"



export function ItemCount({stock,initial}){
    
    initial = parseInt(initial)
    const stockItems = stock
    const [stateItem, setStateItem]= useState(initial)

    const addState = () => {
        if(stateItem<stockItems){
            setStateItem(stateItem +1)
        }else{
            alert("No hay unidades suficientes")
        }

    }

    const removeState = () =>{
        if(stateItem<=0){
            setStateItem(stateItem)
        }else{
            setStateItem(stateItem - 1)
        }
        
    }

    return(
        <div className="countDiv">
            <button onClick={removeState} className="addButton">-</button>
            <p className="itemcount"> {stateItem}    </p>
            
            <button onClick={addState} className="addButton">+</button>
        </div>
    )
        

}
