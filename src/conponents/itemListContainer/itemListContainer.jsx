import React from 'react'
import "./index.css"

export function ItemListContainer(props){
    return(
        <div className="greetings">
            <h1>{props.Name}</h1>
        </div>
    )
}