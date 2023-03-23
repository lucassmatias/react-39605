import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import ProductArray from "./json/mangas.json";
import { useParams } from "react-router-dom";
export default function ItemDetailContainer(){
    const[manga, setManga] = useState({});
    const{id} = useParams();
    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ProductArray.find(item => item.id  === parseInt(id)))
            }, 2000);
        });
        promise.then((data) => {
            setManga(data);
        })
    }, [id])
    return(
        <>
        <ItemDetail item={manga}/>
        </>
    )
}