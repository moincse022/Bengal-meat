import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Compontens/Home/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";

import ProductDetails from "../Category/Product/ProductDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import ShowData from "../Page/ShowData/ShowData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/product/:id",
        loader: () => fetch("./data.json"),
        element: <ProductDetails />,
      
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:'/show/:name',
        loader: () => fetch("./item.json"),
        element: <ShowData />
      }


    ],
  },
]);

export default router;
