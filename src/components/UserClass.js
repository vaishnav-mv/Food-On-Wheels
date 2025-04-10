import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
        console.log("Child constructor")
        
    }
    componentDidMount(){
        console.log("child component mount");
        
    }
    render(){
        console.log("Child render")
        
        const {name}=this.props
        const {count}=this.state
        return(
            <div className="user-card">
                <h1>Count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count Increase</button>
                <h2>Name:{name}</h2>
                <h3>Location:Bangalore</h3>
                <h3>Contact:vaishnav@gmail.com</h3>
            </div>
        )
    }
}
export default UserClass