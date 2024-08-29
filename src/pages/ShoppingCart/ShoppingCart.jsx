import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import scrollToTop from "../../utils/scrollToTop";
import processCart from "../../utils/processCart";
import styled from "styled-components";
import Container from "../../components/Container";
import ProductTile from "../../components/ProductTile/ProductTile";

const FlexWrapper = styled.div`
  display: flex;
`;

const ShoppingCart = () => {
  const { cartState } = useOutletContext();
  const [cart, setCart] = cartState;
  const processedCart = processCart(cart);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <FlexWrapper>
        <div className="items">
          {Array.from(Array(5)).map(() => {return(<ProductTile/>);})}
        </div>
      </FlexWrapper>
    </Container>
  );
};

export default ShoppingCart;
