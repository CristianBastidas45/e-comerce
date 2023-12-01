import { useParams } from "react-router-dom"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import SimilarProduct from "../components/ProductIdPage/SimilarProduct"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import SliderImgs from "../components/ProductIdPage/SliderImgs"

const ProducIdPage = () => {

  const { id }= useParams()

  const [product, getProduct] = useFetch()

  useEffect(()=>{
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    getProduct(url)
  },[id])

  return (
    <div>
      <SliderImgs 
        product={product}
      />
      <ProductInfo 
        product={product}
      />
      <SimilarProduct 
        categoryId = {product?.category.id}
        idProd = {product?.id}
      />
    </div>
  )
}

export default ProducIdPage