import { useEffect, useState } from "react"

const User=(props)=>{
    const [count]=useState(0)
    const [count2]=useState(1)

    useEffect(()=>{
        //api calls
    },[])

    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h1>Count:{count2}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Location:Bangalore</h3>
            <h3>Contact:vaishnav@gmail.com</h3>
        </div>
    )
}
export default User