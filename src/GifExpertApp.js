import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

// Snippet: rafc
const GifExpertApp = () => {

    // let categories = ['Dua Lipa', 'Rels B', 'Duki', 'Bizarrap', 'Emilia', 'Tini', 'Bazzi', 'Bad Bunny'];
    const [categories, setCategories] = useState(['Dua Lipa'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Madison Bear'])      // Cada vez que se llame a setCategories se actualiza el renderizado
    //     setCategories( cat => [...cat, 'Madison Bear'])    

    // }





    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />

        
            <ol>
                {
                    categories.map( category => 
                        // <li key={category}>{category}</li> 
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>

        </>
    )
}

export default GifExpertApp;