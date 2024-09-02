// modules
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
// style components
import { FlexContainer } from '../Basic/Flex';
import { ProductCardContainer, ImageWrapper, CardImage, ProductTitleWrapper} from "./ProductCardStyles"
import { StarIcon } from 'hugeicons-react';
import Button from "../Basic/Button";

const ProductCard = ({product}) => {
  const { cartState: {cart, setCart} } = useOutletContext();

  return (
    <ProductCardContainer>
      <FlexContainer className="col gap-md">
        <ImageWrapper>
          <CardImage src={product.image}></CardImage>
        </ImageWrapper>
        <ProductTitleWrapper>
          <h3 style={{fontSize: "17px", fontWeight: "400"}}>{product.title}</h3>
        </ProductTitleWrapper>
        <p>{product.price}</p>
        <p><StarIcon size={16} color={"#000000"} variant={"stroke"}/>{product.rating.rate} ({product.rating.count})</p>
        <Button>Add to cart</Button>
      </FlexContainer>
    </ProductCardContainer>
  )
}

export default ProductCard;