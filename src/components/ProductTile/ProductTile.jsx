// modules
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
// style components
import { StyledProductTile, FlexContainer, ImageWrapper, ProductImage, RemoveButton } from "./ProductTileStyles";
import PillButton from "../Basic/PillButton/PillButton";

const ProductTile = ({
  product = {
    image: "https://placehold.co/400x600",
    title: "Generic product title",
    price: 3.50,
    description: "Generic product description",
    quantity: 4
  },
}) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { cartState: {cart, setCart} } = useOutletContext();
  const {id, title, price, image} = product;
  const subtotal = calculateSubtotal(price, quantity);

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleRemove = () => {
    const newCart = cart.filter(item => item.id !== id);
    setCart([...newCart]);
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
            <PillButton 
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