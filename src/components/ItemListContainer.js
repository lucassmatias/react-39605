import React from "react";
import "./ItemListContainer-module.css";

function ItemListContainer({greeting}){
    return(
        <p className="item">{greeting}</p>
    )
}

export default ItemListContainer;