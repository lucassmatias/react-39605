import ItemCount from "./ItemCount.js";
import "./ItemDetail-module.css";
export default function ItemDetail({item}){
    return(
        <>
        <div className="container flex itemDetailContainer">
            <span className="containerColumn">
                <img src={item.pictureUrl} alt={item.title} className="detailImg"/>
            </span>
            <div className="containerColumn">
                <div className="containerRow flex">
                    <p className="productTitle">{item.title}</p>
                </div>
                <div className="containerRow flex">
                    <span>Descripción:</span>
                    <p className="productItem">{item.description}</p>
                </div>
                <div className="containerRow flex">
                    <span>Precio:</span>
                    <p className="productItem">${item.price}</p>
                </div>
                <div className="containerRow flex">
                    <span>Stock:</span>
                    <p className="productItem">{item.quantity}</p>
                </div>
                <div className="containerRow flex">
                    <ItemCount item={item}/>
                </div>
            </div>  
        </div>        
        </>
    )
}