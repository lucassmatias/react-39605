import { createContext, useState } from "react";
export const CartContext = createContext();
export function CartProvider({children}){
    const[items, setItems] = useState([]);
    //Funciones de apoyo
    const isInCart = (itemId) => {return  items.find(x => x.id === itemId)===undefined ? false : true;}
    const itemQuantity = () => {return items.reduce((aux, next) => aux + next.quantity, 0);}
    const totalPrice = () => {return items.reduce((prev, prox) => prev + prox.quantity * prox.price, 0);}
    //Funciones elementales
    const addItem = (item,qty) =>{
        if(isInCart(item.id)){
          setItems(items.map(product=>{
            return product.id === item.id ? {...product, quantity: product.quantity + qty} : product
          }))
        } else{
          setItems([...items, {...item, quantity: qty}]);
        }
    }
    const removeItem = (itemId) => { const NonSelectedItems = items.filter(x => x.id !== itemId);  setItems(NonSelectedItems);}
    const clearItems = () => {setItems([]);}
    return(
        <CartContext.Provider value={{items, addItem, removeItem, clearItems, totalPrice, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}