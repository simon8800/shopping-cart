// modules
import styled from "styled-components";
import devices from '../../utils/devices';

// 294 x 392 (w x h)
const CardWidth = "200px";

const ProductCardContainer = styled.div`
  display: flex;
  max-width: ${CardWidth};
  background-color: #FFFFFF;

  @media only screen and ${devices.sm} {
    max-width: 200px;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  max-width: ${CardWidth};
  height: 280px;
`

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

export { ProductCardContainer, ImageWrapper, CardImage };