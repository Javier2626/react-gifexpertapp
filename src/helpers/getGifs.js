



  //ejecutar codigo de manera condicional, evita bucle infinito 
  export const getGifs = async( category ) => { // regresa un promea que resuelve

    // const url ='https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=JOZ2yqcEFystvxZcJ6k1fYSQtUt7ymdp'
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=JOZ2yqcEFystvxZcJ6k1fYSQtUt7ymdp`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    // console.log(gifs);
    // setImages( gifs );

}