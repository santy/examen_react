//http://petstore-demo-endpoint.execute-api.com/petstore/pets?type=cat&page=1

import React from 'react';
import './PetStore.css';

function PetStore() {
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
        <button> {'<<'} </button>
        <span>Página 1</span>
        <button> {'>>'} </button>
        </div>


    </div>
  )
}

export default PetStore