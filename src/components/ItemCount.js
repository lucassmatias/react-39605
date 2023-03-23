import React, {useState, useEffect}  from "react";
import "./ItemCount-module.css";

export default function ItemCount({item}){
    const [counter, setCounter] = useState(0);
    const [stock, setStock] = useState(item.quantity);
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
                <button onClick={onAdd} disabled={counter<1}>Comprar</button>
                </div>
            </div>
            
        </div>
        </>
    );
}
