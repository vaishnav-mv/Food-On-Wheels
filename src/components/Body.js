import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"


const Body = () => {
    // Initialize with restaurant cards from mock data
    let [restList, setListOfRest] = useState(
        resList?.data?.cards.filter(
            card => card?.card?.card?.["@type"]?.includes("Restaurant")
        ) || []
    );

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("http://localhost:5000/api/swiggy");
            const json = await data.json();
            console.log(json);
            // Filter only restaurant cards from the response
            const restaurants = json?.data?.cards.filter(
                card => card?.card?.card?.["@type"]?.includes("Restaurant")
            ) || [];
            
            setListOfRest(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
            setListOfRest([]); // Set empty array on error
        }
    };

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = restList.filter(
                            (res) => res?.card?.card?.info?.avgRating > 4
                        );
                        setListOfRest(filteredList);//modifying the restList using the method setListOfRest.whenever you call thismethod, it find ou the diff and updates the UI
                        //setListOfRest([]) leaves the restList empty
                    }}
                >
                    top rated restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    restList.map(restaurant => (
                        <RestaurantCard 
                            key={restaurant?.card?.card?.info?.id} 
                            resData={restaurant}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Body