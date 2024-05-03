import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Error from "./Component/Error";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Body from "./Component/Body";
import ItemOnMind from "./Component/ItemOnMind"
import RestaurantMenu from "./Component/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Component/Cart";
// lazy loading 
//here InstaMart is the name of component --->used instead if "import InstaMart"
const InstaMart = lazy(() => import("./Component/InstaMart"));




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/onYourMind/:collectionId/:tags",
        element: <ItemOnMind />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
