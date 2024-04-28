import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

import MyList from "../Components/Pages/MyList/MyList";
import LogIn from "../Components/Pages/LogIn";
import Home from "../Components/Home/Home";
import Register from "../Components/Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddSpot from "../Components/Pages/AddSpot/AddSpot";
import ViewDetails from "../Components/Pages/AddSpot/ViewDetails";
import Update from "../Components/Pages/Update/Update";
import AllSpot from "../Components/Pages/AllSpot/AllSpot";
import AddCountry from "../Components/Pages/Country/AddCountry";
import ErrorPage from "../Components/Pages/ErrorPage";
import Spot from "../Components/Pages/Country/Spot";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
         loader: ()=> fetch('http://localhost:5000/add') ,
        
      },
      {
        path: '/all',
        element: <PrivateRoute><AllSpot></AllSpot></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/add') 
      },
      {
        path: '/add',
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>,
        // loader: ()=> fetch('http://localhost:5000/add') 
      },
      {
        path: '/my',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: '/logIn',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/view/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
         loader: ()=> fetch('http://localhost:5000/add') 
      },
      {
        path: '/update/:id',
        element:<Update></Update>,
        
      },
      {
        path:'/countries',
        element:<AddCountry></AddCountry>,
        },
      {
        path: '/:name',
        element:<Spot></Spot>,
        loader: ()=> fetch(`http://localhost:5000/add`) 
      } 
  ]
   
  }
 
]);



export default router;