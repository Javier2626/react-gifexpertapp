import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    // const [count, setCount] = useState(0);



    // const [images, setImages] = useState([]);
    
    const {data: images, loading} = useFetchGifts( category ); // mismo useeffect disparar peticion, unicamnete si categoria camibe 
    

    // useEffect ( () => {
    //     // getGifs();
    //     getGifs( category ) // retona una prome
    //     .then( setImages );
    // }, [ category ]) //arreglo vacio, solo ejectura cuando es rederizado una vez



    // //ejecutar codigo de manera condicional, evita bucle infinito 
    // const getGifs = async() => {

    //     // const url ='https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=JOZ2yqcEFystvxZcJ6k1fYSQtUt7ymdp'
    //     const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=JOZ2yqcEFystvxZcJ6k1fYSQtUt7ymdp`;

    //     const resp = await fetch( url );
    //     const { data } = await resp.json();

    //     const gifs = data.map( img => {
    //         return { 
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs);
    //     setImages( gifs );

    // }
    
    // getGifs();
    
    return (
        <>
        <h3 className="animate__animated animate__flash">{ category }</h3>

        { loading && <p>Loading</p>}


        <div className="card-grid">
              
           
            { 
            images.map ( img => (
            // images.map ( ({ id, title }) => (
            //     <li key={ id }> { title } </li>
                
                <GifGridItem
                key={ img.id }
                // img={ img }
                { ...img } 
                />
            ))
            } 
            </div>
            

        </>
    )
}
