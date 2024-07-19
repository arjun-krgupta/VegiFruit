import React from 'react';
import './Vegetable.css'
import vegiData from './AllVegiData';

function Vegetable(props) {
    return (
        <>
       <h1 id='vegi' className='font-bold'>Vegetables</h1>
        <div className="vegi-area">
        {
            vegiData.map((val,ind)=>
            <div className="vegi-container" key={ind}>
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

export default Vegetable;