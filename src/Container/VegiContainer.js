import {connect} from 'react-redux'
import { addToCart,removeToCart } from '../Action/action/action';
import Vegetable from '../Components/Vegetable/Vegetable';


const mapStateToProps=state=>({
    data:state.CartItem
})
const mapDispatchToProps=dispatch=>(
    {
        addToCartHandler:data=>dispatch(addToCart(data)),
        removeToCartHandler:data=>dispatch(removeToCart(data))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Vegetable)
