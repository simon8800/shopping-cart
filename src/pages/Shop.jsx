import { useEffect, useState } from "react";
import scrollToTop from '../utils/scrollToTop';
import DisplayCase from "../components/DisplayCase";

const fakeStoreURL = "https://fakestoreapi.com/products?limit=15";

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    scrollToTop();
    const controller = new AbortController();

    const fetchProductData = async () => {
      try {
        let data = await fetch(fakeStoreURL, {
          signal: controller.signal,
          mode: "cors",
          cache: "force-cache"
        });
        let productsData = await data.json();
        setProducts(productsData);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(error.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();

    // controller.abort aborts fetch request
    return () => controller.abort();
  }, []);
  
  if (error) return <p>An error has occurred: {error}</p>

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DisplayCase products={products}></DisplayCase>
      )}
    </div>
  );
};

export default Shop;
