import "./css/BuyerForm-module.css";
import { collection, addDoc } from "firebase/firestore"
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import db from "./conexion/conexion";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
export default function BuyerForm(){
    const {items, totalPrice, clearItems} = useContext(CartContext);
    const parseBuy = () => {
        return [...items.map((item) => {
            return {id: item.id, title: item.title, price: item.price, quantity: item.quantity};
        })];
    }
    const sendOrder = async(e) => {
        e.preventDefault();
        let date = new Date();
        const order = {
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `, 
            buyer: {name: document.getElementById("name-input").value, 
                    phone: document.getElementById("number-input").value,
                    email: document.getElementById("email-input").value},
            items: parseBuy(), 
            total: totalPrice()  
        }
        const ordersCollection = await addDoc(collection(db, "orders"), order);
        console.log("Orden generada exitosamente", ordersCollection.id);
        Toastify({
            text: `Orden de compra emitida. Su código de compra es ${ordersCollection.id}`,
            duration: 5000,
            newWindow: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #454545, #FFA559)",
            },
          }).showToast();
        clearItems();
    }
    const refreshMessage = () => {
        console.log(items);
        return items.length === 0 ? <div className="addMessage">Agrega Productos!</div> : <button className="buyerButton" onClick={sendOrder}>Finalizar Compra</button>
    }
    return(
        <>
        <div className="formContainer">
            <form>
                <input type="text" name="name-input" placeholder="   Nombre" required id="name-input"></input>
                <input type="text" name="number-input" placeholder="   Teléfono" required id="number-input"></input>
                <input type="email" name="email-input" placeholder="   Email" required id="email-input"></input>
                {
                    refreshMessage()
                }
            </form>
        </div>
        </>
    );
}