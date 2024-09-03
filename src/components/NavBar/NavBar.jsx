// modules
// styled components
import {Flex, StyledNavBar, NavList, NavLink, CartCounter, CartCounterContainer } from "./NavBarStyles";
// components
import { ShoppingCart02Icon } from 'hugeicons-react';
import HeaderLogo from '../../assets/HeaderLogo'


const NavBar = ({cart}) => {
  const cartCounter = cartQuantity(cart);

  return (
    <StyledNavBar>
      <NavList>
        <li>
          <NavLink to="/"><HeaderLogo/></NavLink>
        </li>
        <li>
          <NavLink to="cart">
            Cart
            <CartCounterContainer>
            <ShoppingCart02Icon size={28} color={"#000000"} variant={"stroke"} />
              <CartCounter>{cartCounter}</CartCounter>
            </CartCounterContainer>
          </NavLink>
        </li>
      </NavList>
    </StyledNavBar>
  )
}

function cartQuantity(cart) {
  let counter = 0;
  for (let item of cart) {
    counter += item.quantity;
  }
  return counter;
}

export default NavBar;