// modules
import styled from "styled-components";
import devices from '../../utils/devices';

// 294 x 392 (w x h)
const CardWidth = "294px";

const ProductCardContainer = styled.div`
  display: inline-block;
  max-width: ${CardWidth};
  outline: 1px solid red;
  background-color: #FFFFFF;

  @media only screen and ${devices.sm} {
    max-width: 200px;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  max-width: ${CardWidth};
  outline: 1px solid black;
`

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const ProductTitleWrapper = styled.div`

`

// const ProductTitleWrapper = styled.div`
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   height: 2.8rem;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `

// const ProductDetailsContainer = styled.div`
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   width: ${CardWidth};
//   height: 4rem;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `

export { ProductCardContainer, ImageWrapper, CardImage, ProductTitleWrapper };