import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: white;
`

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <PageWrapper>
        <Outlet context={{
          countState: [count, setCount],
          cartState: [cart, setCart]
        }}/>
      </PageWrapper>
    </div>
  )
}

export default App
