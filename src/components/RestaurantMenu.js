import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    const [showIndex,setShowIndex]=useState(null)

    if (resInfo === null) return <Shimmer></Shimmer>

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {}

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    //console.log(itemCards)
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(categories)

    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl ">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(",")}</h2>
            {/* controlled component */}
            {categories.map((category,index)=>
            <RestaurantCategory 
            data={category.card.card} 
            key={category.card.card.categoryId} 
            showItems={index===showIndex?true:false} 
            setShowIndex={()=>setShowIndex(index)}
            ></RestaurantCategory>)}
        </div>
    )
}   
export default RestaurantMenu
