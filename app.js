import React from "react";
import ReactDOM from "react-dom/client"
const heading = <h1>hello from jsx</h1>  //react element
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const elem = <span>hello this is a span react elem</span>

//React element
const headingelement = (

    <h1>
        {elem}
        this is a react element
    </h1>
)


//React functional component
const Heading1 = () => <h1 id="heading1">hello1 form jsx</h1>   //you can also do it using normal function. but you need to return it

const Heading3 = () => {
    return <h1 id="heading3">hello3 from jsx</h1>
}

const n = 1000
//to render heading1 inside a div in another react component
const Heading2 = () => (
    <div id="container">
        {/* you can run any piece of js code inside this */}
        {n}
        {Heading3()}
        <Heading3/>

        {/* since react element is a normal js obj, it can be put inside this component inside {} */}
        {headingelement}

        {/* component composition           */}
        <Heading1 />
        <h1 id="heading2">hello2 from jsx</h1>
    </div>

)



root.render(<Heading2 />)