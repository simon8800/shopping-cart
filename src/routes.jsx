import App from "./App";
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Faqs from "./pages/Faqs";

// children require a path and an element
// Create a Link to path

const routes =  [{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "shop",
      element: <Shop />
    },
    {
      path: "cart",
      element: <ShoppingCart />
    },
    {
      path: "faqs",
      element: <Faqs />
    }
  ]
}]

export default routes;