
import React from 'react';
import fruitData from './AllFruitData';
import './Fruits.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/features/cartSlice';

function Fruits(props) {
    const dispatch=useDispatch();

    // add to cart
    const send=(e)=>{
       dispatch(addCart(e))
    }

    return (
        <>
        <h1 className='font-bold text-4xl text-center mt-12 lg:text-5xl '>Fruits</h1>
        <div className="fruit-area">
        {
            fruitData.map((da,ind)=>
            <div className="fruit-container" key={ind}>
               <img src={da.img} alt="" />
               <p className='name'>{da.name}</p>
               <p className='price'>Price : {da.price}</p>
               <button onClick={()=>send(da)}>Add to Cart</button>
            </div>
            
            )
        }
        </div>
        </>
    );
}

export default Fruits;