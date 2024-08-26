import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.div`
  margin-bottom: 25px;
`

const CartCounter = styled.div`
  display: inline-block;
  position: absolute;
  top: 10px;
  right: -10px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  min-width: 1rem;
  text-align: center;
  font-size: 0.75rem;
`

const CartCounterContainer = styled.div`
  position: relative;
  display: inline-block;
`

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
`

const NavLink = styled(Link)`
  color: black;
`

const NavBar = ({cart}) => {
  const cartCounter = cart.length

  return (
    <StyledNavBar>
      <NavList>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="shop">Shop</NavLink></li>
        <li style={{"margin-left": "auto"}}>
          <NavLink to="cart">
            Cart
            <CartCounterContainer>
            <i class="fa-solid fa-cart-shopping fa-sm"></i>
            <CartCounter>{cartCounter}</CartCounter>
          </CartCounterContainer></NavLink>
        </li>
      </NavList>
    </StyledNavBar>
  )
}

export default NavBar;

