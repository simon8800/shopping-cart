// modules
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: inline-block;
  width: 115px;
  height: 40px;
  border-radius: 50px;
  background-color: rgb(244, 244, 244);
  padding: 0.1rem 0.6rem;
`;

const Count = styled.div`
  display: flex;
  height: 44px;
  overflow: hidden;
  align-items: center;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  height: 44px;
  padding: 0.25rem;
`;

export { ButtonContainer, Count, StyledButton };