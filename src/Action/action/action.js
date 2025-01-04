
import { Add, Remove } from "../../Constant/constant"

export const addToCart=(data)=>
{
    // console.log("action", data)
    return {
        type:Add,
        data:data
    }
}

export const removeToCart=()=>
{
   return {
    type:Remove,
   }
}