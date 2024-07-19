import React from 'react';
import vegetable from '../Components/Assets/slider 1.png'
import fruit from '../Components/Assets/fruit.png'

function Slider(props) {
    return (
       <>
     <h1 className='text-3xl md:text-4xl font-bold text-center mb-3'>Services</h1>
   <div className="flex justify-around items-center bg-[#3a4d1f] w-full py-2">
        <div className='flex flex-col items-center gap-3'>
        <h2 className='font-bold text-center text-4xl italic text-white'>Fresh & Organic</h2> 
        <h1 className='text-7xl uppercase font-bold text-white'>veggies </h1>
            <span className='text-center text-2xl text-white'>UPTO 20% OFF</span>
             <button className='bg-white text-[#3a4d1f] p-3 uppercase font-bold'>Shop Now</button>
           </div>
            <div className="w-[24%]">
            <img src={vegetable} alt=""  className='max-w-full h-auto'/>
            </div>
        </div>

        <div className="flex justify-around flex-row-reverse items-center bg-[#b62e20] w-full py-2">
        <div className='flex flex-col items-center gap-3'>
        <h2 className='font-bold text-center text-4xl italic text-white'>Fresh & Organic</h2> 
        <h1 className='text-7xl uppercase font-bold text-white'>fruits </h1>
            <span className='text-center text-2xl text-white'>UPTO 20% OFF</span>
             <button className='bg-white text-[#b62e20] p-3 uppercase font-bold'>Shop Now</button>
           </div>
            <div className="w-[23%]">
            <img src={fruit} alt=""  className='max-w-full h-auto'/>
            </div>
        </div>
       </>
    );
}

export default Slider;