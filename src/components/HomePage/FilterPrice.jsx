import { useForm } from "react-hook-form"
import './style/FilterPrice.css'
import '../RegisterPage/styles/FormRegister.css'

const FilterPrice = ({setPriceRange}) => {

    const {register, handleSubmit, reset} = useForm()

    const submit = data => {
        const from = +data.from;
        const to = +data.to;

        setPriceRange({
            from,
            to: to ===0? Infinity : to
        })
        // reset({
        //     from ='',
        //     to = ''
        // })
    }

  return (
        <div className="filter__price-container">
        <h4 className="filter__price__title">Price</h4>
        <hr className="filter__price__hr"/>
      <form className="filterprice__form" onSubmit={handleSubmit(submit)}>
        <label className="filterprice__form__label">
            <span className="filterprice__form__label_s">From</span>
            <input className="filterprice__form__label_i" {...register('from')} type="number" />
        </label>
        <label className="filterprice__form__label">
            <span className="filterprice__form__label_s">To</span>
            <input className="filterprice__form__label_i" {...register('to')} type="number" />
        </label>
        <button className="register__form__btn">Filter</button>
    </form>
        </div>
  )
}

export default FilterPrice