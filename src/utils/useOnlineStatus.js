import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true)
    //we use useEffect bcoz it has to add only once
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true)
        })
        
    })
    return onlineStatus
}
export default useOnlineStatus