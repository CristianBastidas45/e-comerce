import { useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from 'react-redux'
import ProductCard from '../components/HomePage/ProductCard'
import FilterCategory from '../components/HomePage/FilterCategory'
import FilterPrice from "../components/HomePage/FilterPrice";
import './styles/HomePage.css'

const HomePage = () => {

  const [nameValue, setNameValue] = useState('');
  const [categorySelected, setCategorySelected] = useState('all');
  const [priceRange, setPriceRange] = useState({
    from: 0,
    to: Infinity
  });

  const products = useSelector(store => store.products);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const inputName = useRef()

  const handleInputName = () =>{
    setNameValue(inputName.current.value.toLowerCase().trim());
  }
  const cbFilter = prod =>{
    //filter per name
    const filterName = prod.title.toLowerCase().includes(nameValue);
    //filter per category
    const filterCartegory = categorySelected=== 'all'?true: categorySelected===prod.category.id
    //filter per price
    const filterPrice = priceRange.from <= +prod.price &&  +prod.price<= priceRange.to
    return filterName && filterCartegory && filterPrice
  }

  return (
    <div className="homepage-container">
      <input className="homepage__input" ref={inputName} onChange={handleInputName} type="text"  placeholder="Search product"/>
        <h2 className="filter__title">Filters</h2>
      <div className="filter-container">
        <FilterPrice 
          setPriceRange = {setPriceRange}
        />
        <FilterCategory 
          categorySelected = {categorySelected}
          setCategorySelected ={setCategorySelected}
        />
      </div>
      <div className="product-container">
        {
          products?.filter(cbFilter).map(prod => (
            <ProductCard 
              key={prod.id}
              product = {prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage