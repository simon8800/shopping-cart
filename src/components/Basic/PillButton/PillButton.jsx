// modules
import styled from "styled-components";
import { useState } from "react";
// style components
import { FlexContainer } from "../Flex";
import { ButtonContainer, Count, StyledButton } from "./PillButtonStyles";
import { MinusSignIcon, Add01Icon } from "hugeicons-react";

const PillButton = ({ handleDecrease, handleIncrease, value }) => {
  const [count, setCount] = useState(value || 1);

  const defaultHandleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const defaultHandleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <ButtonContainer>
      <FlexContainer className="space-btwn">
        <StyledButton onClick={handleDecrease || defaultHandleDecrease}>
          <MinusSignIcon size={20} color={"#000000"} variant={"stroke"} />
        </StyledButton>
        <Count>{count}</Count>
        <StyledButton onClick={handleIncrease || defaultHandleIncrease}>
          <Add01Icon size={20} color={"#000000"} variant={"stroke"} />
        </StyledButton>
      </FlexContainer>
    </ButtonContainer>
  );
};

export default PillButton;
