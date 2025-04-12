import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, cloudinaryImageId} = resData?.card?.card?.info || {};
    
    return (
        <div className="m-2 p-4 w-xs h-[300px] bg-gray-200 rounded-lg  hover:bg-amber-100" >
            <img className="rounded-lg h-5/10 w-6/10"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-2">{name}</h3>
            <h3>{cuisines?.join(",")}</h3>
            <h3>{avgRating}</h3>
        </div>
    )
}

export default RestaurantCard