import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const {cartState} = useOutletContext();
  const [cart, setCart] = cartState;
  
  return (<>
    <h1>Cart</h1>
    <p>Hello from the cart</p>
  </>)
}

export default Cart;