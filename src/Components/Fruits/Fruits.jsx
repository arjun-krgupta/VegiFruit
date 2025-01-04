
import React from 'react';
import fruitData from './AllFruitData';
import './Fruits.css'

function Fruits(props) {
    return (
        <>
        <h1 className='font-bold text-4xl text-center mt-12 lg:text-5xl '>Fruits</h1>
        <div className="fruit-area">
        {
            fruitData.map((val,ind)=>
            <div className="fruit-container" key={ind}>
               <img src={val.img} alt="" />
               <p className='name'>{val.name}</p>
               <p className='price'>Price : {val.price}</p>
               <button onClick={()=>props.addToCartHandler({name:val.name,img:val.img,price:val.price})}>Add to Cart</button>
            </div>
            
            )
        }
        </div>
        </>
    );
}

export default Fruits;