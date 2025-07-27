import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import SingleProduct from "./pages/SingleProduct";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Shop from "./pages/Shop";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "profile",
          element: <Profile/>
        },
        {
          path: "cart",
          element: <Cart/>
        },
        {
          path: "wishlist",
          element: <Wishlist/>
        },
        {
          path: "shop",
          element: <Shop/>
        },
        {
          path: "singleProduct/:id",
          element: <SingleProduct />,
        }
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
