import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import ProductCard from "../HomePage/ProductCard"

const SimilarProduct = ({ categoryId, idProd }) => {

  const [productsByCategory, getProductsByCategory] = useFetch()

  useEffect(() => {
    if (categoryId) {
      const url = `https://e-commerce-api-v2.academlo.tech/api/V1/products?categoryId=${categoryId}`
      getProductsByCategory(url)
    }
  }, [categoryId])

console.log(productsByCategory);

  return (
    <article>
      <h2>Similar products</h2>
      <div className="product-container">
        {
          productsByCategory?.filter(prod => {
            if(prod.id !== idProd && prod.categoryId === categoryId){
              return prod
            }
          }).map(product => (
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