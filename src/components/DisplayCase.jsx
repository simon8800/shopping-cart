import ProductCard from "./ProductCard";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
`

const DisplayCase = ({products}) => {
  return(
    <StyledWrapper>
      {products ? (products.map(product => (<ProductCard key={product.id} product={product} />))) : (<p>Loading...</p>) }
    </StyledWrapper>
  )
}

export default DisplayCase;