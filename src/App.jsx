import { useState } from 'react';
import Shop from "./pages/Shop"

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Shop />
    </div>
  )
}

export default App
