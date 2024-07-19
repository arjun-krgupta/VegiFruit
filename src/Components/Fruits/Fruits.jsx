
import React from 'react';
import fruitData from './AllFruitData';
import './Fruits.css'

function Fruits() {
    return (
        <>
        <h1 id='fruit' className='font-bold'>Fruits</h1>
        <div className="fruit-area">
        {
            fruitData.map((val,ind)=>
            <div className="fruit-container" key={ind}>
               <img src={val.img} alt="" />
               <p className='name'>{val.name}</p>
               <p className='price'>Price : {val.price}</p>
               <button>Add to Cart</button>
            </div>
            
            )
        }
        </div>
        </>
    );
}

export default Fruits;