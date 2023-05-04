import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Home/Chefs/Chefs";
import Blog from "../pages/Blog/Blog";
import ChefCart from "../pages/Home/ChefCart/ChefCart";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Recipe from "../pages/ViewRecipe/Recipe/Recipe";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          path:"/chefs/:id",
          element: <PrivateRoutes><Recipe></Recipe></PrivateRoutes>,
          loader: ({params}) => fetch(`https://food-point-scerver-afsana-haque.vercel.app/chefs/${params.id}`)
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