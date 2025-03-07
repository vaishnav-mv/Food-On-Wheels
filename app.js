import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

//when you are giving inline css, you should give it as an object
const stylecard = {
    backgroundColor: "yellow"
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {/* // <div className="res-card" style={stylecard}>     */}
            <img className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wo4yr53jpsf72vmz4qvd"></img>
            <h3>Meghna Foods</h3>
            <h4>South Indian, North Indian, Biriyani</h4>
            <h4>4.4 stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header></Header>
        <Body></Body>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout></AppLayout>)