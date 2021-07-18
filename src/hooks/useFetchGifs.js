import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


// use significa que es un hook, todos comienzan, son funciones


export const useFetchGifts = ( category ) => {

    const [state, seState] = useState({
        data: [],
        loading: true
    });

    

    useEffect(() => {
       
        getGifs( category )
        .then( imgs => {

            // setTimeout( () =>{
                // console.log(imgs);

            seState({
                data: imgs,
                loading: false
            });
        // },3000);
    })

    }, [category])




    // setTimeout( () => {
    //     seState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000 );

    return state; // { data:[], loading: true };

    

}