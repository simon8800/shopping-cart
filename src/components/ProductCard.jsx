import styled from "styled-components";
import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="card">
      <img className="card-img" src="https://placehold.co/100" alt="" />
      <h3>Product Name</h3>
      <p>Product Description</p>
      <label htmlFor="quantity">Quantity: </label>
      <input type="number" name="quantity" id="quantity" value="1" min="1"/>
      <Button>Add to cart</Button>
    </div>
  )
}

export default ProductCard;