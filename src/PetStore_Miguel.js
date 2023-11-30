//http://petstore-demo-endpoint.execute-api.com/petstore/pets?type=cat&page=1

import React from 'react';
import './PetStore.css';
import { useState, useEffect } from 'react';

let DEFAULT_URL = "https://jsonplaceholder.typicode.com/posts"

async function fetchPosts() {
  const response = await fetch(DEFAULT_URL);
  const blogPosts = await response.json();
  return blogPosts;
}

function PetStore() {
  const [data, setData] = useState([]);

  function UrlPosts(){
    DEFAULT_URL="https://jsonplaceholder.typicode.com/posts"
  }

  function UrlComment(){
    DEFAULT_URL="https://jsonplaceholder.typicode.com/comments"
  }
  function UrlAlbums(){
    DEFAULT_URL="https://jsonplaceholder.typicode.com/albums"
  }

  useEffect(function () {
    fetchPosts().then((fetchPosts) => setData(fetchPosts));
  }, [])

  return (
    <div>
      <div className='button'>
        <button onClick={UrlPosts}>Posts</button>
        <button onClick={UrlComment}>Comments</button>
        <button onClick={UrlAlbums}>Albums</button>
      </div>

      <ul>
        <li className='title'><span>id</span><span>Precio</span></li>
        {data.map((pets) =>
          <li className='odd'><span>{pets.id}</span><span>{pets.title}</span></li>
        )}
      </ul>
      <div className='button'>
        <button> {'<<'} </button>
        <span>Página 1</span>
        <button> {'>>'} </button>
      </div>


    </div>
  )
}

export default PetStore