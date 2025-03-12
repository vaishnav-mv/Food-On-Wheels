import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, cloudinaryImageId} = resData?.card?.card?.info || {};
    
    return (
        <div className="res-card" >
            <img className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{cuisines?.join(",")}</h3>
            <h3>{avgRating}</h3>
        </div>
    )
}

export default RestaurantCard