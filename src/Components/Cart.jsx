import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Card,Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { addCart,removeCart,removeSingleItem } from '../redux/features/cartSlice';


const TABLE_HEAD = [
    "ACTION",
    "NAME",
    "PRODUCT",
    "QUANTITY",
    "AMOUNT",
  ];

function Cart(props) {
  const {cartItem}=useSelector((state)=>state.allCart)
  const dispatch=useDispatch()

  const [totalPrice,setPrice]=useState(0)
  const[totalQnty,setQnty]=useState(0)

  // count total price
  const total=()=>
  {
    let totalPrice=0
    cartItem.map((val,ind)=>
    {
      totalPrice=val.price * val.qnty +totalPrice
    })
    setPrice(totalPrice)
  }

  useEffect(()=>
  {
    total()
  },[total])

  // count total quantity
  const quantity=()=>
    {
      let totalQnty=0
      cartItem.map((val,ind)=>
      {
        totalQnty= val.qnty +totalQnty
      })
      setQnty(totalQnty)
    }

    useEffect(()=>
    {
      quantity()
    },[quantity])

  // add to cart
  const handleIncrement=(e)=>
  {
    dispatch(addCart(e))
  }
  // remove to cart
  const handleDecrement=(e)=>
  {
   dispatch(removeCart(e))
  }
  // remove single item 
  const handleSingleDecrement=(e)=>
  {
    dispatch(removeSingleItem(e))
  }

    return (
        <div className='flex flex-col justify-center px-3 w-[60%] mx-auto mt-10'>
          <div className="w-full bg-black rounded text-white py-4 px-5">
             <h1 className="text-3xl font-bold text-start">Cart Details</h1>
          </div>
          {
            cartItem.length>0 ? 
            <Card className="h-auto w-full overflow-auto">
                 <table className="w-full min-w-max table-auto text-left">
                   <thead className='border-collapse border'>
                     <tr>
                       {TABLE_HEAD.map((head) => (
                         <th key={head} className="p-4 pt-10">
                           <Typography
                             variant="small"
                             color="blue-gray"
                             className="font-bold leading-none"
                           >
                             {head}
                           </Typography>
                         </th>
                       ))}
                     </tr>
                   </thead>
                   <tbody>
                     {cartItem.map((data,index) => {
                       return (
                        <tr key={index} className='border-collapse border'>
                            <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              <MdDelete className='text-2xl text-red-400 cursor-pointer' onClick={()=>handleDecrement(data.id)} />
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {data.name}
                            </Typography>
                          </td>
                          <td className="p-4 ps-7">
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600 w-10"
                            >
                              <img src={data.img} className='w-full h-auto'/>
                            </Typography>
                          </td>
                          
                          <td className="p-4">
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600"
                            >
                          <span className='flex items-center gap-1'>
                          <button onClick={data.qnty <=1 ? ()=>handleDecrement(data.id) : ()=>handleSingleDecrement(data)}>
                            <FaMinus className='text-lg text-black' />
                            </button>
                            <input type="text" value={data.qnty} className='w-8 border border-gray-600 text-center' disabled />
                            <button onClick={()=>handleIncrement(data)}>
                            <FaPlus className='text-lg text-black'/>
                            </button>
                          </span>
                            </Typography>
                          </td>
                          <td className="p-4 ps-10">
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600"
                            >
                            {data.qnty*data.price}
                            </Typography>
                          </td>
                        </tr>
                       );
                     })}
                   </tbody>
                   <tfoot className='border-collapse border'>
                       <tr className='absolute right-16 -bottom-14'>
                       <td className="p-4">
                            <Typography
                            variant="small"
                            className="font-semibold text-black text-base"
                            >
                            Total Quantity : {totalQnty}
                            </Typography>
                            </td>
                           <td className="p-4">
                            <Typography
                            variant="small"
                            className="font-semibold text-black text-base"
                            >
                            Total Amount : {totalPrice}
                            </Typography>
                            </td>
                       </tr>
                   </tfoot>
                 </table>
               </Card>
      : ""
          }

          {
            cartItem.length===0 ? 
            <div className="flex flex-col gap-2 justify-center items-center py-4 border border-black w-full">
            <FaShoppingCart className='text-3xl text-red-400' />
            <h1 className='text-xl'>Your Cart is Empty</h1>
          </div>
          : ""
          }
        </div>
    );
}

export default Cart;