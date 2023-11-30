//http://petstore-demo-endpoint.execute-api.com/petstore/pets?type=cat&page=1

import React, { useEffect, useState } from 'react';
import './PetStore.css';
//Failed to fetch

const PetStore = ({Mascotas}) => {
    const [loadedPost, setLoadedPosts] = useState([])
    const [pag, setPag] = useState(1)

    const DEFAULT_URL = "http://petstore-demo-endpoint.execute-api.com/petstore/pets?page=" + pag

    async function fetchPosts() {
        const response = await fetch(DEFAULT_URL);
        const blogPosts = await response.json();
        return blogPosts;
    }

    // Peta
    useEffect(
        ()=> {
            console.log(DEFAULT_URL);
            fetchPosts().then((fetchedPosts) => {
                setLoadedPosts(fetchedPosts);
              });
        }
        ,[]
    );

    // Se saca por consola la URL para verificar que funciona bien
    useEffect(
        () => {
            console.log(DEFAULT_URL)
        }
    )

    // Se modifica la pagina que se esta viendo
    function decrementarPagHandler(){
        setPag(pag-1)
    }
    function incrementarPagHandler(){
        setPag(pag+1)
    }

    // Se sacarian por pantalla los resultados obtenidos de la web
    return (
        <div>
            <div className='button'>
            <button className='selected'>Cats</button>
            <button className='no_selected'>Dogs</button>
            <button className='no_selected'>Fishs</button>
            </div>
            <ul>
                <li className='title'><span>id</span><span>Precio</span></li>
                <li className='odd'><span>1</span><span>249.99</span></li>
                <li className='even'><span>2</span><span>124.99</span></li>
                <li className='odd'><span>3</span><span>0.99</span></li>
            </ul>
            <div className='button'>
            <button onClick={decrementarPagHandler}> {'<<'} </button>
            <span>Página {pag}</span>
            <button onClick={incrementarPagHandler}> {'>>'} </button>
            </div>
        </div>
    )
}

export default PetStore