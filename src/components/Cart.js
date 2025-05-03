import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center p-4 m-4">
            <h1>Cart Items</h1>
            <div className="w-6/12 m-auto">
                <button className="bg-amber-200 rounded-2xl p-2 m-2" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length===0&&<h1>Cart is empty</h1>}
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}
export default Cart