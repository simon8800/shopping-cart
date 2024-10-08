// modules
import { useState } from "react";
// style components
import { FlexContainer } from "../Flex";
import { ButtonContainer, Count, StyledButton } from "./PillCounterStyles";
import { MinusSignIcon, Add01Icon } from "hugeicons-react";

const PillCounter = ({ handleDecrease, handleIncrease, quantity }) => {
  const [count, setCount] = useState(1);

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
        <Count>
          {quantity || count}
        </Count>
        <StyledButton onClick={handleIncrease || defaultHandleIncrease}>
          <Add01Icon size={20} color={"#000000"} variant={"stroke"} />
        </StyledButton>
      </FlexContainer>
    </ButtonContainer>
  );
};

export default PillCounter;
