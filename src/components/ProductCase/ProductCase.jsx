// styled component
import { ProductCaseContainer } from "./ProductCaseStyles.jsx";
// component
import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductCase = ({products}) => {
  return(
    <ProductCaseContainer>
      {products ? (
        products.map(product => <ProductCard key={product.id} product={product} />)
      ) : (
        <p>Loading...</p>
      )}
    </ProductCaseContainer>
  )
}

export default ProductCase;