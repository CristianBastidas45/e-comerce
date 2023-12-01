import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCartThunk, setCart } from '../store/slices/cart.slice'
import CartProduct from '../components/CartPage/CartProduct'
import axios from 'axios'
import getConfigToken from '../utils/getTokenConfig'
import './styles/CartPage.css'


const CartPage = () => {

  const cart =  useSelector( store => store.cart)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCartThunk())
  },[])

  const totalPriceCart = cart.reduce((acc,cv)=>{
    return acc + (cv.product?.price*cv.quantity)
  },0)

  const handlePurchase = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url,'', getConfigToken())
      .then(res => {
        console.log(res.data)
        dispatch(setCart([]))
      })
      .catch(err => console.log(err))
  }


  return (
    <div className='cart-container'>
      <h1>Cart</h1>
      <div className='cart__products-container'>
        {
          cart.map( prod => (
            <CartProduct 
              key={prod.id}
              prod = {prod}
            />
          ))
        }
      </div>
      <hr />
      <footer className='cart__footer'>
        <span className='cart__footer__key'>Total</span>
        <span className='cart__footer__value'>{totalPriceCart}</span>
        <button className='cart__footer__btn' onClick={handlePurchase}> Checkout</button>
      </footer>
    </div>
  )
}

export default CartPage