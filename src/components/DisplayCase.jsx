import ProductCard from "./ProductCard";
import styled from "styled-components";
import devices from "../utils/devices.js"

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  padding: 20px;
  gap: 25px;
  background-color: #ECF0F1;
  color: #2C3E50;

  @media only screen and ${devices["2xl"]} {
    grid-template-columns: repeat(4, auto);
  }

  @media only screen and ${devices.xl} {
    grid-template-columns: repeat(3, auto);
  }

  @media only screen and ${devices.lg} {
    grid-template-columns: repeat(2, auto);
  }

  @media only screen and ${devices.md} {
    grid-template-columns: auto;
    justify-content: center;
  }
`

const DisplayCase = ({products}) => {
  return(
    <StyledWrapper>
      {products ? (products.map(product => (<ProductCard key={product.id} product={product} />))) : (<p>Loading...</p>) }
    </StyledWrapper>
  )
}

export default DisplayCase;