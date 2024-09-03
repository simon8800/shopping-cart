// modules
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const PageWrapper = styled.div`
  background-color: white;
`

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);
    if (itemIndex === -1) {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      setCart(newCart);
    }
  }

  const removeFromCart = (product) => {
    const removeItem = cart.find(item => item.id === product.id).quantity === 1 ? true : false;
    if (removeItem) {
      const newCart = cart.filter(item => item.id !== product.id);
      setCart(newCart);
    } else {
      const newCart = cart.map(item => {
        if (item.id === product.id) {
          item.quantity -= 1;
        }
        return item;
      })
      setCart(newCart);
    }
  }


  return (
    <div>
      <NavBar cart={cart}/>
      <PageWrapper>
        <Outlet context={{
          countState: [count, setCount],
          cartState: [cart, setCart],
          addToCart,
          removeFromCart
        }}/>
      </PageWrapper>
    </div>
  )
}

export default App
