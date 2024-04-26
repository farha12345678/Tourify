import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AllSpot from "../Components/Pages/AllSpot";
import AddSpot from "../Components/Pages/AddSpot";
import MyList from "../Components/Pages/MyList";
import LogIn from "../Components/Pages/LogIn";
import Home from "../Components/Home/Home";

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
        element: <AllSpot></AllSpot>
      },
      {
        path: '/add',
        element: <AddSpot></AddSpot>
      },
      {
        path: '/my',
        element: <MyList></MyList>
      },
      {
        path: '/logIn',
        element: <LogIn></LogIn>
      }
    ]
  },
]);



export default router;