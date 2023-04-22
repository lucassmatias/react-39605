import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./css/ItemListContainer-module.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "./conexion/conexion";
import { ClipLoader } from "react-spinners";
export default function ItemListContainer(){
    const [mangas, setMangas] = useState([]);
    const {category} = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const aux = collection(db, "items");
        const q = query(aux, where("category", "==", `${category}`));
        const lista = category ? q : aux;
        getDocs(lista).then((snapshot) => {
            if(snapshot.size === 0) console.log("No data");
            setMangas(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        }).catch((error) => console.log(error)).finally(() => setLoading(false))
    }, [category])
    return(
        <>
            {loading ? <ClipLoader loading={loading} color={"red"} size={50}/> : <ItemList item={mangas}/>}
        </>     
    )
}
