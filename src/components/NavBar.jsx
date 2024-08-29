import { Link } from "react-router-dom";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  gap: 10px;
`

const StyledNavBar = styled.header`
  background-color: #2C3E50;
  color: #FFFFFF;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  & a {
    color: #FFFFFF;
  }

  & h1 {
  }
`

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex: 1 1 0;
  justify-content: space-between;
  gap: 10px;
`

const NavLink = styled(Link)`
  font-size: 1.5rem;
`

const TitleLink = styled(Link)`
  text-decoration: none;
`

const CartCounterContainer = styled.div`
  display: inline-block;
`

const CartCounter = styled.div`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  min-width: 1rem;
  text-align: center;
  font-size: 0.75rem;
  transform: translate(-5px, 5px)
  `

const NavBar = ({cart}) => {
  const cartCounter = cart.length
  
  return (
    <StyledNavBar>
      <NavList>
        <Flex>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="shop">Shop</NavLink></li>
        </Flex>
        <li>
          <TitleLink to="/"><h1>Stylin'</h1></TitleLink>
        </li>
        <li>
          <NavLink to="cart">
            Cart
            <CartCounterContainer>
              <i className="fa-solid fa-cart-shopping fa-sm"></i>
              <CartCounter>{cartCounter}</CartCounter>
            </CartCounterContainer>
          </NavLink>
        </li>
      </NavList>
    </StyledNavBar>
  )
}

export default NavBar;