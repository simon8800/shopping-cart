// modules
import styled from 'styled-components';
import { useState } from 'react';
// style components
import { FlexContainer } from './Flex';
import { MinusSignIcon } from '@hugeicons/react-pro';

const ButtonContainer = styled.div`
  display: inline-block;
  width: 132px;
  height: 44px;
  border-radius: 50px;
  background-color: rgb(244, 244, 244);
  padding: 0.25rem;
`;

const Count = styled.div`
  display: flex;
  height: 44px;
  overflow: hidden;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  height: 44px;
  padding: 0.25rem;
`;

const PillButton = ({handleDecrease, handleIncrease, value}) => {
  const [count, setCount] = useState(value || 1);

  const defaultHandleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const defaultHandleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  return (
    <ButtonContainer>
      <FlexContainer className="space-btwn">
        <StyledButton onClick={handleDecrease || defaultHandleDecrease}> <MinusSignIcon 
      size={24} 
      color={"#000000"}
      variant={"stroke"}
    /></StyledButton>
        <Count>{count}</Count>
        <StyledButton onClick={handleIncrease || defaultHandleIncrease}><i className="fa-light fa-plus"/></StyledButton>
      </FlexContainer>
    </ButtonContainer>
  );
};

export default PillButton;
