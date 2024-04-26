import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AllSpot from "../Components/Pages/AllSpot";
import AddSpot from "../Components/Pages/AddSpot";
import MyList from "../Components/Pages/MyList";
import LogIn from "../Components/Pages/LogIn";
import Home from "../Components/Home/Home";
import Register from "../Components/Pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/all',
        element: <PrivateRoute><AllSpot></AllSpot></PrivateRoute>
      },
      {
        path: '/add',
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
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
      }
    ]
  },
]);



export default router;