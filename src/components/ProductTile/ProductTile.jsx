// modules
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
// style components
import { StyledProductTile, FlexContainer, ImageWrapper, ProductImage, RemoveButton } from "./ProductTileStyles";
import PillCounter from "../Basic/PillButton/PillCounter";

const ProductTile = ({product}) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { addToCart, removeFromCart, cartState: [cart, setCart] } = useOutletContext();
  const {id, title, price, image} = product;
  const subtotal = calculateSubtotal(price, quantity);

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      addToCart(product);
    }

  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      removeFromCart(product);
    }
  }

  const handleRemove = () => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  return (
    <StyledProductTile>
      <FlexContainer className="gap5">
        
        <ImageWrapper>
          <ProductImage src={image} alt=""/>
        </ImageWrapper>
        
        <FlexContainer className="col space-around push-left">
          <h3 style={{fontSize: "17px"}}>{title}</h3>
          <p style={{fontSize: "20px"}}>${price.toFixed(2)}</p>
          <FlexContainer className="col push-left squish gap5">
            <PillCounter 
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              quantity={quantity}
            />
            <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
          </FlexContainer>
          
          <p>Subtotal: ${subtotal}</p>
        </FlexContainer>
      </FlexContainer>
    </StyledProductTile>
  )
}

function calculateSubtotal (price, quantity) {
  return (price * quantity).toFixed(2);
}

export default ProductTile;