import styled from "styled-components";

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

  &.center {
    justify-content: center;
    align-items: center;
  }

  &.fit {
    height: 100%;
    width: 100%;
  }

  &.gap-sm {
    gap: 5px;
  }
  &.gap-md {
    gap: 10px;
  }
  &.gap-lg {
    gap: 20px;
  }
  &.gap-xl {
    gap: 25px;
  }
  &.gap-2xl {
    gap: 40px;
  }
  

`

export { FlexContainer };