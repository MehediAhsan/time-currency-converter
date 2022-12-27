import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Currency from "../components/Currency";
import Home from "../components/Home";
import Time from "../components/Time";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/currency',
        element: <Currency></Currency>
    },
    {
        path: '/time',
        element: <Time></Time>
    }
])