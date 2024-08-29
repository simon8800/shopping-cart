import { useState } from 'react';
import styled from "styled-components";
import Button from "./Basic/Button";
import { useOutletContext } from 'react-router-dom';

const cardWidth = '300px';

const Card = styled.div`
  width: ${cardWidth};
  border: 1px solid white;
  padding: 8px;
  background-color: white;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${cardWidth};
  height: ${cardWidth};
  margin-bottom: 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${cardWidth};
  height: 200px;
  align-items: center;
`

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const ProductTitleContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: ${cardWidth};
  height: 2.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ProductDetailsContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  width: ${cardWidth};
  height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
`


const ProductCard = ({product}) => {
  const { cartState } = useOutletContext();
  const [cart, setCart] = cartState;

  const handleClick = () => {
    setCart([...cart, product])
  }

  return (
    <Card>
      <ImageContainer>
        <CardImage src={product.image} alt="" />
      </ImageContainer>
      <Container>
        <div>
        <ProductTitleContainer>
        <h4 className="card-title">{product.title}</h4>
        </ProductTitleContainer>
        <ProductDetailsContainer>
          <p>{product.description}</p>
        </ProductDetailsContainer>
        <p>${product.price}</p>
        </div>
        <Button onClick={handleClick}>Add to cart</Button>
      </Container>
    </Card>
  )
}

function addToCart(newItem) {
  cart.find(item => item.id === newItem.id)
}

export default ProductCard;