// modules
import { useState } from "react";
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
  const {id, title, price, image} = product;
  const subtotal = calculateSubtotal(price, quantity);

  return (
    <StyledProductTile>
      <FlexContainer>
        <ImageWrapper>
          <ProductImage src={image} alt=""/>
        </ImageWrapper>
        <FlexContainer className="col space-around push-left">
          <h3>{title}</h3>
          <p>${price.toFixed(2)}</p>
          <FlexContainer className="col push-left squish">
            <PillButton/>
            <RemoveButton>Remove</RemoveButton>
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