import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    // Initialize with restaurant cards from mock data
    const [restList, setListOfRest] = useState([]
        // resList?.data?.cards.filter(
        //     card => card?.card?.card?.["@type"]?.includes("Restaurant")
        // ) || []
    );

    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    const [searchText, setSeachText] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("http://localhost:5000/api/swiggy");
            // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            const json = await data.json();
            console.log(json);
            // Filter only restaurant cards from the response
            const restaurants = json?.data?.cards.filter(
                card => card?.card?.card?.["@type"]?.includes("Restaurant")
            ) || [];

            setListOfRest(restaurants);
            setFilteredRestaurant(restaurants)
        } catch (error) {
            console.error("Error fetching data:", error);
            setListOfRest([]); // Set empty array on error
        }
    };

    //conditional rendering
    // if(restList.length===0){
    //     return <Shimmer></Shimmer>
    // }

    const onlineStatus=useOnlineStatus()
    if(onlineStatus===false) return <h1>Looks like you are offline!!Pls check your internet connection</h1>


    return restList.length === 0 ? <Shimmer></Shimmer> : (
        <div className="body">
            <div className=" flex">
                <div className="search m-4 p-4 ">
                    <input type="text"
                        className="border-2 border-solid border-blue-500 rounded-lg"
                        value={searchText}
                        onChange={(e) => {
                            setSeachText(e.target.value)
                        }}></input>
                    <button className="px-2 py-1 m-3 bg-green-400 rounded-lg" onClick={() => {
                        console.log(searchText)
                        const filteredRes = restList.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurant(filteredRes)
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button
                    className="px-2 border-2 bg-amber-300 rounded-lg"
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
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map(restaurant => (
                        <Link  key={restaurant?.card?.card?.info?.id} to={ `/restaurants/${restaurant?.card?.card?.info?.id}`}><RestaurantCard
                            resData={restaurant}
                        /></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body