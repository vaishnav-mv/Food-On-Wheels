import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"


const Body = () => {

    let [restList,setListOfRest] = useState([
        {
            "card": {
                "card": {
                    "info": {
                        "id": "139558",
                        "name": "Dindigul Thalappakatti",
                        "cloudinaryImageId": "exhzkyd9pjoqlobruy4v",
                        "cuisines": [
                            "Biryani",
                            "Barbecue",
                            "South Indian",
                            "Chinese",
                            "North Indian"
                        ],
                        "avgRating": 4.3,


                    },
                }
            }
        },
        {
            "card": {
                "card": {
                    "info": {
                        "id": "142291",
                        "name": "Aroma's Hyderabad House",
                        "cloudinaryImageId": "jdfi5bh0hmdet7g7qk5z",

                        "cuisines": [
                            "Biryani",
                            "Hyderabadi",
                            "Mughlai",
                            "Chinese"
                        ],
                        "avgRating": 3.5,

                    },

                },

            }
        }
    ])


    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = restList.filter(
                            (res) => res.card.card.info.avgRating > 4
                        )
                        setListOfRest(filteredList) //modifying the restList using the method setListOfRest
                        //setListOfRest([]) leaves the restList empty
                        console.log(filteredList)
                    }}
                >top rated restaurant</button>
            </div>
            <div className="res-container">
                {

                    restList.map(restaurant => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}></RestaurantCard>)

                }
            </div>
        </div>
    )
}

export default Body