import React, {useContext} from "react";
import { BiCart } from "react-icons/bi";
import "./css/CartWidget-module.css";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import "./css/LinkFont-module.css"
function Carrito(){   
    const {itemQuantity} = useContext(CartContext);
    return( 
        <Link to="/cart">
            <div className="linkFont">
                <BiCart className="carrito"/>
                {itemQuantity()}
            </div>
        </Link>
    )
}

export default Carrito;