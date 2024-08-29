import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  min-height: 100vh;
`

const RootLayout = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <AppContainer>
      <NavBar cart={cart}></NavBar>
      <ContentWrapper>
        <Outlet context={{
          countState: [count, setCount],
          cartState: [cart, setCart]
        }}/>
      </ContentWrapper>
      <Footer />
    </AppContainer>
  )
}

export default RootLayout;