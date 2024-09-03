import styled from "styled-components";
import { Link } from "react-router-dom";

const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledNavBar = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  & h1 {
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex: 1 1 0;
  justify-content: space-between;
  gap: 10px;
`;

const NavLink = styled(Link)`
  font-size: 1.5rem;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
`;

const CartCounterContainer = styled.div`
  display: inline-block;
`;

const CartCounter = styled.div`
  color: black;
  background-color: red;
  display: inline-block;
  border-radius: 50%;
  font-weight: bold;
  min-width: 1rem;
  text-align: center;
  font-size: 0.75rem;
  transform: translate(-5px, 5px);
`;

export {Flex, StyledNavBar, NavLink, NavList, TitleLink, CartCounter, CartCounterContainer};