import styled from "styled-components";
import { useState } from "react";

const StyledProductTile = styled.div`
  display: inline-block;
  font-family: Helvetica;
  border: 1px solid black;
  width: 400px;

  & h3 {
    font-weight: normal;
    font-size: minmax(15px, 1.25vw);
  }
`

const FlexContainer = styled.div`
  display: flex;

  .squish-vertical {
    align-items: center;
  }
`

const ImageWrapper = styled.div`
  width: 150px;
  height: 200px;
  margin-right: 8px;
`

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const RemoveButton = styled.button`
  border: none;
  background-color: white;
  color: blue;
  padding: 0;
  margin: 0;
  cursor: pointer;
`

const ProductTile = ({product, handleChangeItem}) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const {id, title, price, image} = product;
  const subtotal = calculateSubtotal(price, quantity);

  const handleChange = (e) => {
    setQuantity(e.target.value);
    handleChangeItem(e.target.value, id)
  }

  return (
    <StyledProductTile>
      <FlexContainer>
        <ImageWrapper>
          <ProductImage src={image} alt=""/>
        </ImageWrapper>
        <div className="product-details">
          <h3>{title}</h3>
          <p>${price.toFixed(2)}</p>
          <FlexContainer>
            <p>Quantity: </p>
            <input 
              type="number" 
              name="" id="" 
              value={quantity} 
              min="1" 
              onChange={handleChange}
            />
          </FlexContainer>
          <RemoveButton>Remove</RemoveButton>
          <p>Subtotal: ${subtotal}</p>
        </div>
      </FlexContainer>
    </StyledProductTile>
  )
}

function calculateSubtotal (price, quantity) {
  return (price * quantity).toFixed(2);
}

export default ProductTile;