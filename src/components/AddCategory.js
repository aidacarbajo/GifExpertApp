import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // para que no recargue la pagina

        if(inputValue.trim().length > 2) {  // trim para quitar espacios alante y detras de la palara
            setCategories( (elem => [inputValue, ...elem]) );
            setinputValue('');
        }

        // console.log('Submit hecho');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text' 
                value={ inputValue } 
                onChange={ handleInputChange } 
                 />
        </ form>
    )
}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}