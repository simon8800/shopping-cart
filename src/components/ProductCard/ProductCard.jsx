// modules
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
// style components
import { ProductCardContainer, ImageWrapper, CardImage} from "./ProductCardStyles"
import Button from "../Basic/Button";

const ProductCard = ({product}) => {
  const { cartState: {cart, setCart} } = useOutletContext();

  return (
    <ProductCardContainer>
      <ImageWrapper>
        <CardImage src={product.image}></CardImage>
      </ImageWrapper>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>⭐️{product.rating.rate} {product.rating.count}</p>
      <h4>hILLLOO</h4>
      <Button>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;