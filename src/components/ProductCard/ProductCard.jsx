// modules
import { useOutletContext } from 'react-router-dom';
// style components
import { FlexContainer } from '../Basic/Flex';
import { ProductCardContainer, ImageWrapper, CardImage} from "./ProductCardStyles"
import { StarIcon } from 'hugeicons-react';
import PillButton from '../Basic/PillButton/PillButton';

const ProductCard = ({product}) => {
  const { addToCart } = useOutletContext();

  const handleClick = () => {
    addToCart(product);
  }

  return (
    <ProductCardContainer>
      <FlexContainer className="col gap-md space-btwn">
        <FlexContainer className="col">
          <ImageWrapper>
            <CardImage src={product.image}></CardImage>
          </ImageWrapper>
          <h3 style={{fontSize: "17px", fontWeight: "400"}}>{product.title}</h3>
          <p style={{fontSize: "20px", fontWeight: "700"}}>${product.price}</p>
          <p style={{fontSize: "13px", fontWeight: "600"}}><StarIcon size={16} color={"#000000"} variant={"stroke"}/>{product.rating.rate} <span style={{fontSize: "11px", fontWeight: "400"}}>({product.rating.count})</span></p>
        </FlexContainer>
        <PillButton onClick={handleClick}>ADD TO CART</PillButton>
      </FlexContainer>
    </ProductCardContainer>
  )
}

export default ProductCard;