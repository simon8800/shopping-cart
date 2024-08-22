import { useState } from 'react';
import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  
  width: 150px;
  border: 1px solid black;
  padding: 5px;
`

const StyledImg = styled.img`
  height: 100px;
  width: 100px;
`

const ProductCard = ({product}) => {
  return (
    <StyledCard>
      <StyledImg src={product.image} alt="" />
      <div className="container">
        <h4 className="card-title">{product.title}</h4>
        <p>${product.price}</p>
        <p>⭐️{product.rating.rate} ({product.rating.count})</p>
      </div>
      <Button>Add to cart</Button>
    </StyledCard>
  )
}

export default ProductCard;