import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
// import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
// import Features from "../../Pages/Features/Features";
// import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Logini from "../../Pages/Logini/Logini";
import Mainout from "../../Pages/Mainout/Mainout";
import Orderi from "../../Pages/Orderi/Orderi";
// import Orders from "../../Pages/Orders/Orders";
import ShopMore from "../../Pages/ShopMore/ShopMore";
import SignUp from "../../Pages/SignUp/SignUp";
// import Started from "../../Pages/Started/Started";

// const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Logini></Logini>,
      },
      {
        path: "/aboutUs",
        element: <Login></Login>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: <Mainout></Mainout>,
        loader: ({ params }) =>
          fetch(`https://surgical-server.vercel.app/services/${params.id}`),
      },
      {
        path: "orders",
        element: <Orderi></Orderi>,
      },
      // {
      //   path:'/checkout/:id',
      //   element:<Checkout></Checkout>,
      //   loader:({params})=> fetch(`https://localhost:5000/services/${params.id}`)
      // },
      // {
      //   path:'orders',
      //   element: <Orders></Orders>
      // },
      //     {
      //       path:'features',
      //       element:<Features></Features>
      //     },
      //     {
      //       path:'started',
      //       element:<Started></Started>
      //     },
      {
        path: "shopmore",
        element: <ShopMore></ShopMore>,
      },
    ],
  },
]);

export default router;
