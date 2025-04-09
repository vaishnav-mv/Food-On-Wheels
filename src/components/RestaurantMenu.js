import { useEffect,useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"

const RestaurantMenu=()=>{
const [resInfo,setResInfo]=useState(null)

const {resId}=useParams()
console.log(resId);



    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async()=>{
        const data=await fetch(`http://localhost:5000/api/swiggy/restaurantMenu?resId=${resId}`)
        const json=await data.json()
        console.log(json)
        setResInfo(json.data)
    }
    if (resInfo===null) return <Shimmer></Shimmer>

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info||{}

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards);
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100}</li>)}
            </ul>
            
        </div>
    )
}
export default RestaurantMenu
