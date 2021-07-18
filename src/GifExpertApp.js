import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    
    // // TAREA agregar nuevo elemento
    // const handleAdd = () =>{
    //     // 'HunterXHunter'
    //     // categories.push('HunterXHunter'); // NO USAR
    //     //         console.log( categories );

    //     // setCategories( ['HunterXHunter', ...categories ]);
    //     setCategories( cats =>[...cats, 'HunterXHunter']);
    // }

    return (
        <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={ setCategories }/>
        {/* <AddCategory /> */}
         {/* obliga que set categories sea obligatorio */}

        <hr />

        {/* <button onClick={ handleAdd}>Agregar</button> */}

        <ol>
            {
                categories.map( category => (    //ERROR {} CAMBIO ()
                    // return <li key={ category }> { category }</li>
                        
                    <GifGrid
                    key={ category }
                    category={ category }
                    />
                ))
            }
        </ol>


        </>
    )
}