// modules
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import scrollToTop from "../../utils/scrollToTop";
// style components
import { FlexContainer } from "../../components/Basic/Flex";
import Container from "../../components/Basic/Container";
// feature components
import ProductTile from "../../components/ProductTile/ProductTile";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const ShoppingCart = () => {
  const { cartState: [cart] } = useOutletContext();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <FlexContainer className="col center">
          {cart.length > 0 ? (
            cart.map(item => <ProductTile key={item.id} product={item}/>)
          ) : (
            <p>Your cart is currently empty.</p>
          )}
      </FlexContainer>
      <FlexContainer className="center">
        {cart.length > 0 ? (<OrderSummary cart={cart} />) : null}
      </FlexContainer>
    </div>
  );
};

export default ShoppingCart;
