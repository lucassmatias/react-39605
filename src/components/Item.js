import React from "react";
import "./Item-module.css";
import { Link } from "react-router-dom";
import "./LinkFont-module.css"
export default function Item({item}){
    return(
        <>
        <div className="itemContainer" key={item.id}>
            <div className="itemRow">
                <Link to={"/item/"+ item.id}><img src={item.pictureUrl} alt={item.title} className="itemImg"/></Link>
            </div>
            <div className="itemRow">
                <div className="itemColumn">
                    <span className="itemValue">
                    <Link to={"/item/"+ item.id} className="linkFont">{item.title}</Link>             
                    </span>             
                </div>
            </div>   
            <hr/>
            <div className="itemRow redBlock">
                <div className="itemColumn">
                    <span className="itemCategory itemValue">
                        {item.category}
                    </span>               
                </div>
            </div>     
        </div>
        </>
    )
}