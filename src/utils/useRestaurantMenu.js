import { useEffect, useState } from "react"
const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo]=useState(null)
    //fetch data
    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(`http://localhost:5000/api/swiggy/restaurantMenu?resId=${resId}`)
        const json = await data.json()
        setResInfo(json.data)
    }
    return resInfo
}
export default useRestaurantMenu