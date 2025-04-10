import User from './User'
import UserClass from './UserClass'
import React from 'react'

class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("Parent constructor")
    }
    componentDidMount(){
        //console.log("parent component mount")
        //api call
        
    }
    render(){
        //console.log("Parent Render")
        
        return(
            <div>
            <h1>About Class</h1>
            <h2>This is Namaste React</h2>
            {/* <User name={"vaishnav m v"}></User> */}
            <UserClass name={"first"}></UserClass>

        </div>
        )
        
    }
}


// const About=()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React</h2>
//             <User name={"vaishnav m v"}></User>
//             <UserClass name={"vaishnav m v new"}></UserClass>
//         </div>
//     )
// }

export default About