import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import ProductCard from "../HomePage/ProductCard"

const SimilarProduct = ({ categoryId, idProd }) => {

  const [productsByCategory, getProductsByCategory] = useFetch()

  useEffect(() => {
    if (categoryId) {
      const url = `https://ecomerce-backend-6ch6.onrender.com/products?categoryId=${categoryId}`
      getProductsByCategory(url)
    }
  }, [categoryId])



  return (
    <article>
      <h2>Similar products</h2>
      <div className="product-container">
        {
          productsByCategory?.filter(prod => prod.id !== idProd).map(product => (
            <ProductCard
              key={product.id}
              product={product} />
          ))
        }
      </div>

    </article>
  )
}

export default SimilarProduct