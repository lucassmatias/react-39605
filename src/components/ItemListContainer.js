import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ProductArray from "../components/json/mangas.json"
import "./ItemListContainer-module.css"

export default function ItemListContainer(){
    const [mangas, setMangas] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        const  promesa = new Promise((resolve) => {
             setTimeout(() => {
                resolve(category?ProductArray.filter(x => x.category === category) : ProductArray)
            }, 2000)
        });
        promesa.then((data) => {
            setMangas(data)
        })
    },[category]);
    return(
        <ItemList item={mangas}/>
    )
}
