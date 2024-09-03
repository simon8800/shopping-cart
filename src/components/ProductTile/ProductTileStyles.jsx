import styled from "styled-components"

const StyledProductTile = styled.div`
  font-family: Helvetica;
  width: 400px;
  height: 200px;
  padding-right: 10px;

  & h3 {
    font-weight: normal;
    font-size: minmax(15px, 1.25vw);
  }
`

const FlexContainer = styled.div`
  display: flex;
  
  &.col {
    flex-direction: column;
  }

  &.squish {
    align-items: center;
  }

  &.space-around {
    justify-content: space-around;
  }

  &.space-btwn {
    justify-content: space-between;
  }

  &.push-left {
    align-items: flex-start;
  }

  &.gap5 {
    gap: 5px;
  }
`

const ImageWrapper = styled.div`
  width: 100px;
  flex-shrink: 0;
`

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const RemoveButton = styled.button`
  border: none;
  background-color: white;
  color: blue;
  padding: 0;
  margin: 0;
  cursor: pointer;
`

export { StyledProductTile, FlexContainer, ImageWrapper, ProductImage, RemoveButton };