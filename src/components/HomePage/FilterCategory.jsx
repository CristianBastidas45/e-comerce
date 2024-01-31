import { useEffect } from "react"
import useFetch from '../../hooks/useFetch'
import './style/FilterCategory.css'

const FilterCategory = ({categorySelected,setCategorySelected}) => {

  const [categories, getCategories] = useFetch();

  useEffect(()=>{
    const url = 'https://ecomerce-backend-6ch6.onrender.com/categories'
    getCategories(url)
  },[])

  const handleCategory = (id) => {
    setCategorySelected(id)
  }


  return (
    <section className="category-container">
      <h3 className="category__title">Categories</h3>
      <hr />
      <ul>
        <li className={`category__item ${categorySelected=='all' && 'item__selected'}`} onClick={()=>handleCategory('all') }>All Categories</li>
        {
          categories?.map(category =>(
            <li className={`category__item ${categorySelected == category.id && 'item__selected'}`} onClick={()=>handleCategory(category.id) } key={category.id}>
              {category.name}
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default FilterCategory