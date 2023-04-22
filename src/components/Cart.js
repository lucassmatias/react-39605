import ContainerCart from "./ContainerCart.js";
import "./css/Cart-module.css";
import BuyerForm from "./BuyerForm";
export default function Cart(){
    return(
        <>
        <div className="container cartContainer">
            <ContainerCart/>
            <BuyerForm/>
        </div>
        </>
    )
}