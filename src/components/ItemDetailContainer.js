import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";
import db from "./conexion/conexion";
import { ClipLoader } from "react-spinners";
export default function ItemDetailContainer(){
    const [manga, setManga] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const aux = doc(db, "items", `${id}`);
        getDoc(aux).then((snapshot) => {
            if(snapshot.exists()){
                setManga({id: snapshot.id, ...snapshot.data()});    
            }
        }).catch((error) => console.log(error)).finally(() => setLoading(false))
    }, [id])
    return(
        <>
            {loading ? <ClipLoader loading={loading} color={"red"} size={50} className="container"/> : <ItemDetail item={manga}/>}
        </>
    )
}