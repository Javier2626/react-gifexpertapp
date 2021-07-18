import React from 'react'

// export const GifGridItem = ( props ) => {  //FORMA 2
    export const GifGridItem = ( {title, url} ) => {

    // console.log(props);    //FORMA 2

    // console.log({id, title, url});


    return (
        <div className="card animate__animated animate__fadeIn">
            {/* { img.title } */}
            <img src={ url } alt={ title } />
            <p> { title } </p>
            
        </div>
    )
}
