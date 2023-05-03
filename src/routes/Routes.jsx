import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Home/Chefs/Chefs";
import Login from "../Loing/Login/Login";
import Register from "../Loing/Register/Register";
import Blog from "../pages/Blog/Blog";
import ChefCart from "../pages/Home/ChefCart/ChefCart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:"/",
          element:<Chefs></Chefs>
        },
        {
          path:"/",
          element:<ChefCart></ChefCart>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        }
      ]
    },
  ]);
  
export default router;