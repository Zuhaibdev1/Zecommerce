import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import ProductsLayout from "../Layouts/ProductsLayout";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";
import Contact from "../Pages/Contact";
import Checkout from "../Pages/Checkout";
import Login from "../Pages/Login";
import NotFound from "../Components/NotFound";
import ProductError from "../Pages/ProductError";
import Signup from "../pages/Signup";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <ProductsLayout />,
                errorElement: < ProductError />,
                children: [
                    {
                        path: "/products",
                        element: <Products />,
                    },
                    {
                        path: "/products/:id",
                        element: <ProductDetail />,
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Signup />
            },

        ],

    },
    {
        path: "*",
        element: <NotFound />
    }
]);