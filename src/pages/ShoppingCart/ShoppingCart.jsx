// modules
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import scrollToTop from "../../utils/scrollToTop";
import processCart from "../../utils/processCart";
// style components
import { FlexContainer } from "../../components/Basic/Flex";
import Container from "../../components/Basic/Container";
// feature components
import ProductTile from "../../components/ProductTile/ProductTile";

const ShoppingCart = () => {
  const { cartState } = useOutletContext();
  const [cart, setCart] = cartState;
  const processedCart = processCart(cart);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <FlexContainer className="col center">
          {/* {cart.length > 0 ? (
            cart.map(item => <ProductTile key={item.id} product={item}/>)
          ) : (
            <p>Your cart is empty</p>
          )} */}
          <ProductTile />
      </FlexContainer>
    </div>
  );
};

export default ShoppingCart;
