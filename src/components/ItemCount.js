import React, {useState, useEffect, useContext}  from "react";
import "./css/ItemCount-module.css";
import { CartContext } from "./context/CartContext";
export default function ItemCount({item}){
    const [counter, setCounter] = useState(0);
    const [stock, setStock] = useState(item.quantity);
    const {addItem} = useContext(CartContext);
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);
    const onAdd = () => {
        setStock(stock - counter);
        setCounter(0);
    }
    useEffect(()=>{
        setStock(item.quantity);
    }, [item.quantity])
    return(
        <>
        <div className="itemCountContainer">
            <div className="counterDiv">
                <span className="itemCounter">{counter} unidad/es</span>   
            </div>
            <div className="buttonDiv">
                <button onClick={increase} disabled={counter>=stock}>+</button>
                <button onClick={decrease} disabled={counter<1}>-</button>
                <div className="buttonComprarDiv">
                <button onClick={() => {onAdd(); addItem(item, counter)}}>Agregar</button>
                </div>
            </div>
        </div>
        </>
    );
}
