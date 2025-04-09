import { LOGO_URL } from "../utils/constants"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

const Header = () => {

    const [btnName, setBtnName] = useState("login")

    console.log("Header rendered")

    useEffect(()=>{
        console.log("useEffect rendered")
    },[])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName==="login"?setBtnName("logout"):setBtnName("login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header