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
          {/* {Array.from(Array(5)).map((ele, idx) => {return(<ProductTile key={idx}/>);})} */}
          <ProductTile/>
      </FlexContainer>
    </div>
  );
};

export default ShoppingCart;
