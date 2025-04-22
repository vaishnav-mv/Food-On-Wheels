import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    const [userName, setUserName] = useState()
    //authentication
    useEffect(() => {
        //make an api call to send username and password
        const data = {
            name: "Akshay Saini"
        }
        setUserName(data.name)
    }, [])

    return (
        <UserContext.Provider value={{loggedInUser:userName}}>
            <div className="app">
                <UserContext.Provider value={{loggedInUser:"vaishnav"}}>
                    <Header></Header>
                </UserContext.Provider>
                <Outlet></Outlet>
            </div>
        </UserContext.Provider>
    )

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery></Grocery></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu></RestaurantMenu>
            }
        ],
        errorElement: <Error></Error>
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}></RouterProvider>) 
