import React from 'react';
import './Vegetable.css'
import vegiData from './AllVegiData';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/features/cartSlice';

function Vegetable(props) {
    const dispatch=useDispatch();

    // add to cart
    const send=(e)=>{
       dispatch(addCart(e))
    }

    return (
        <>
       <h1 id='vegi' className='font-bold'>Vegetables</h1>
        <div className="vegi-area">
        {
            vegiData.map((data,index)=>
            <div className="vegi-container" key={index}>
               <img src={data.img} alt="" />
               <p className='name'>{data.name}</p>
               <p className='price'>Price : {data.price}</p>
               <button onClick={()=>send(data)}>Add to Cart</button>
            </div>
            
            )
        }
        </div>
        </>
    );
}

export default Vegetable;