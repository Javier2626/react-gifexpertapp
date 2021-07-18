

//rafc + tab
import React, { useState } from 'react'


//TAREA2 SetCat sea una funcion requeri 
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories }) => {

    const [inputValue, setinputValue] = useState('');//()undefind,''string vacio

    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setinputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('Submit hecho') // para TAREA setcategories props
        
        //TAREA
        // setCategories( cats =>[...cats, inputValue]);
        


        if ( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats ]);
            setinputValue('');
        }
    }
    



    return (
        <form onSubmit={ handleSubmit }>
            {/* <h1>{ inputValue }</h1> */}
            {/* <h2>Add Category</h2> */}
            <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            />
            

        </form>
    )
}


AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}