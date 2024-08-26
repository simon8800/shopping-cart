import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const RootLayout = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar cart={cart}></NavBar>
      <Outlet context={{
        countState: [count, setCount],
        cartState: [cart, setCart]
      }}/>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
        element: <Cart />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
