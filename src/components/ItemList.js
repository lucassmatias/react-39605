import React from "react";
import Item from "./Item";
import "./ItemList-module.css"
export default function ItemList({item}){
return(
    <div className="container flexList">
        {
            item.map(item => 
                <Item item={item} key={item.id}/>
            )
        }
    </div>
    )
}