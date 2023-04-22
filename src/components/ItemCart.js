import { FcClearFilters } from "react-icons/fc";
import "../components/css/itemCart-module.css";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
export function ItemCart({item, refresh}){
    const { removeItem } = useContext(CartContext);
    return(
        <div className="itemCart">
            <div className="itemContentColumn">
                <div className="itemContentRow">
                    <div className="itemImgContainer">
                        <img className="itemImg" src={item.pictureUrl} alt="imagen"></img>
                    </div>
                </div>
            </div>
        <div className="itemContentColumn2">
            <div className="itemContentRow">
                <span className="title">{item.title}</span>
                <span className="quantity">Cantidad: {item.quantity}</span>
                <span className="Uprice">Precio Unitario: ${item.price}</span>   
                <span className="price">Subtotal: ${item.price * item.quantity}</span>
            </div>
        </div>
            <div className="itemContentColumn3">
                <FcClearFilters className="clear-item-icon" onClick={() => {removeItem(item.id); refresh();}}/>
            </div>        
        </div>
    )
}