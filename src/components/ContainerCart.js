import { AiOutlineClear } from "react-icons/ai";
import { CartContext } from "./context/CartContext";
import { ItemCart } from "./ItemCart.js";
import { useContext } from "react";
import "./css/ContainerCart-module.css"
export default function ContainerCart(){
    const {items, clearItems, totalPrice, itemQuantity } = useContext(CartContext);
    const cartRefresh = () => {
        return(
            (itemQuantity() === 0) ? <span className="span">Carrito vacío</span> : 
            items.map(item => {
            return(
                <ItemCart item={item} key={item.id} refresh={cartRefresh}/>
            )     
        }) 
        )      
    }
    return(
        <>
            <div className="cart">
                <div className="content">
                    {cartRefresh()}
                </div>
                <div className="finish">
                    <div>
                        {
                            (itemQuantity() === 0) ? <span>Esperando Productos</span> : 
                            <span className="totalSpan">Total: ${totalPrice()}</span> 
                        }
                    </div>
                    <div>
                        <AiOutlineClear className="clear-icon" onClick={()=>{clearItems()}}/>
                        <span>Borrar todo</span>
                    </div>                   
                </div>
            </div>
        </>
    )
}