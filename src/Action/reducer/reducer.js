
import { Add,Remove } from "../../Constant/constant";

const inialState={
    cartData:[]
}

export default function CartItem(state=[],action)
{
     switch(action.type)
     {
        case Add:
            return[
                ...state,
                {cartData:action.data}
            ]
            break;
            case Remove:
                state.pop()
            return[
                ...state
            ]
            break;
            default :
            return state
     }
}