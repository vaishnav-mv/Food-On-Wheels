import { LOGO_URL } from "../utils/constants"
import { useState,useEffect,useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = () => {

    const [btnName, setBtnName] = useState("login")

    console.log("Header rendered")

    useEffect(()=>{
        console.log("useEffect rendered")
    },[])

    const onlineStatus=useOnlineStatus()

    const {loggedInUser}=useContext(UserContext)
    console.log(loggedInUser)

    //subsribing to the store using a selector
    const cartItems=useSelector((store)=>store.cart.items) //subscribing only to cart.items portion of the store
    console.log(cartItems);
    

    return (
        <div className="flex justify-between sm:bg-yellow-200 lg:bg-gray-300 ">
            <div className="logo-container">
                <img className="w-50" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4">
                    <li className="px-4">Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="about">About</Link></li>
                    <li className="px-4"><Link to="contact">Contact</Link></li>
                    <li className="px-4"><Link to="grocery">Grocery</Link></li>
                    <li className="px-4 font-bold">Cart({cartItems.length} items)</li>
                    <button className="login" onClick={() => {
                        btnName==="login"?setBtnName("logout"):setBtnName("login")
                    }}>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header