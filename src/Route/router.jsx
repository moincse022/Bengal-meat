import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Compontens/Home/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";

import ProductDetails from "../Category/Product/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    
      {
        path: "/product/:id",
        element: <ProductDetails/>,
        loader:()=> fetch('./data.json')
  
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element:<Register/>,
      },
    ],
  },
]);

export default router;
