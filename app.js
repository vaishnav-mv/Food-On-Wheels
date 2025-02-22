// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "hello world all"
// )
// console.log(heading); //return an object

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading) //passing an object inside the render

//react element is an object. When rendering on the dom, this react element becomes an html that the browser understands and puts it into the dom


/**< div id = "parent" >
     <div id="child">
         <h1>heelooo</h1>
     </div>
    </div > 
 */ 
//creating nested elements using react

const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"heelooo"),React.createElement("h2",{},"i am an h2 tag")]
    ),
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"heelooo"),React.createElement("h2",{},"i am an h2 tag")]) ] //if you want to make siblings, pass it as an array
) 

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent) //putting parent inside the root tag
//if there is a tag already in the root, it will be replaced by this. ie,render method replaces everything inside the root  

