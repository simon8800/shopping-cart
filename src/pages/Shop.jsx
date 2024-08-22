import { useEffect, useState } from "react";
import DisplayCase from "../components/DisplayCase";

const fakeStoreURL = "https://fakestoreapi.com/products?limit=10"

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchProductData = async () => {
      try {
        let data = await fetch(fakeStoreURL, {
          signal: controller.signal
        });
        let productsData = await data.json();
        setProducts(productsData);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();

    // controller.abort aborts fetch request
    return () => controller.abort();
  }, [])

  return (
    <div>
      <h1>Shop</h1>
      {loading ? <p>Still loading...</p> : 
        (products ? <DisplayCase products={products}></DisplayCase> : 
          <p>{error}</p>
        )}
    </div>
  )
}

export default Shop;