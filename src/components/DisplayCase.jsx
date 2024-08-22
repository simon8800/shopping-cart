import ProductCard from "./ProductCard";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: stretch;
`

const DisplayCase = ({products}) => {
  return(
    <StyledWrapper>
      {products.map(product => (<ProductCard key={product.id} product={product} />))}
    </StyledWrapper>
  )
}

export default DisplayCase;