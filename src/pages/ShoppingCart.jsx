import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import scrollToTop from "../utils/scrollToTop";
import processCart from "../utils/processCart";
import styled from "styled-components";
import Container from "../components/Container";
import ProductTile from "../components/ProductTile";

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

  const handleChangeItem = (quantity, id) => {
    // const newCart = cart.map(item => {
    //   if (item.id === id) {
    //     item.quantity = quantity
    //     return item;
    //   }
    //   return item;
    // })
    // console.log(newCart)
    // setCart([...newCart]);
    console.log("ShoppingCart.jsx: handleChangeItem")
  };

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <FlexWrapper>
        <div className="items">
          {processedCart.length > 0 ? (
            processedCart.map((item) => (
              <ProductTile
                key={item.id}
                product={item}
                handleChangeItem={handleChangeItem}
              />
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        <div className="summary">
          <h2>Summary</h2>
        </div>
      </FlexWrapper>
    </Container>
  );
};

export default ShoppingCart;
