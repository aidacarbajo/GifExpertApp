import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

 const [state, setState] = useState({
     data: [],
     loading: true
 });

    useEffect( () => {
        getGifs(category)
            .then( res => setState({
                data: res,
                loading: false
            }) 
        )}, [category]);   // si la category cambia se vuelve a ejecutar
    // [] si no tiene dependencias solo se ejecutará una vez la funcion

    return state;  // { data: [], loading: true }
}
