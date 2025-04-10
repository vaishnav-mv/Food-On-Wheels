import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url: "https://dummy"
            }
        }
        //console.log(this.props.name+ " Child constructor")
        
    }
    async componentDidMount(){
        //console.log(this.props.name+" child component mount");
        const data=await fetch("https://api.github.com/users/vaishnav-mv")
        const json=await data.json()
        this.setState({
            userInfo:json
        })
        console.log(json)
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate")
        
    }
    componentWillUnmount(){
        
    }
    render(){
        //console.log(this.props.name+" Child render")  
        const {name,location,avatar_url}=this.state.userInfo      
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h3>Contact:vaishnav@gmail.com</h3>
            </div>
        )
    }
}
export default UserClass