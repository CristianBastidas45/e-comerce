import { useDispatch } from "react-redux"
import { deleteProductFromCartThunk, updateProductFromCartThunk } from "../../store/slices/cart.slice"
import './styles/CartProduct.css'

const CartProduct = ({ prod }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteProductFromCartThunk(prod.id))
    }
    const handleMinus = () =>{
        if(prod.quantity>1){
            dispatch(updateProductFromCartThunk(prod.id,prod.quantity-1))
        }
    }

    const handlePlus = () =>{
        dispatch(updateProductFromCartThunk(prod.id,prod.quantity+1))
    }

    return (
        <section className="cartproduct-container">
            <header className="cartproduct__header">
                <img className="cartproduct__header__img" src={prod.product.images[0].url} alt="imagen" />
            </header>
            <article className="cartproduct__info">
                <h3 className="cartproduct__info__title">{prod.product.title}</h3>
                <div className="cartproduct__info__quantity">
                    <button onClick={handleMinus} className="cartproduct__info__quantity__btn">-</button>
                    <p className="cartproduct__info__quantity__p">{prod.quantity}</p>
                    <button onClick={handlePlus} className="cartproduct__info__quantity__btn">+</button>
                </div>
                <div className="cartproduct__info__price">
                    <span className="cartproduct__info__price__key">Price</span>
                    <span className="cartproduct__info__price__value">{prod.product.price}</span>
                </div>
            </article>
            <button className="cartproduct__btn" onClick={handleDelete}>
                <i className='bx bx-trash' ></i>
            </button>
        </section>
    )
}

export default CartProduct