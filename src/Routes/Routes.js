import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Blog from "../components/Blog";
import Currency from "../components/Currency";
import Home from "../components/Home";
import Main from "../components/Main";
import Time from "../components/Time";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/currency",
        element: <Currency></Currency>,
      },
      {
        path: "/time",
        element: <Time></Time>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },
]);
