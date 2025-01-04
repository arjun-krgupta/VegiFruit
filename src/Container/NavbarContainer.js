import {connect} from 'react-redux'

import Navbar from '../Components/Navbar/Navbar'

const mapStateToProps=state=>({
    data:state.CartItem
})
const mapDispatchToProps=dispatch=>(
    {
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
