import { useEffect, useState } from "react"
import { addProductToCartThunk, getCartThunk, updateProductFromCartThunk } from "../../store/slices/cart.slice"
import { useDispatch, useSelector } from "react-redux"
import './styles/ProductInfo.css'
import { useNavigate } from "react-router-dom"

const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)
    const [infoUpdate, setInfoUpdate] = useState(true)

    const cart = useSelector(store => store.cart)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCartThunk())
    }, [infoUpdate])

    const handleMinus = () => {
        if (quantity - 1 >= 1) {
            setQuantity(quantity - 1)
        }
    }

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        if (localStorage.getItem('token')) {
            setInfoUpdate(!infoUpdate)
            const idWeb = cart.filter(prod => prod.productId == product.id)
            console.log('si');
            if (idWeb.length) {
                dispatch(updateProductFromCartThunk(idWeb[0].id, quantity + idWeb[0].quantity))
            } else {
                dispatch(addProductToCartThunk(product.id, quantity))
            }
        } else {
            navigate('/login')
        }
    }

    return (
        <article className="productinfo-container">
            <h3>{product?.brand}</h3>
            <h2>{product?.title}</h2>
            <p className="productinfo__description">{product?.description}</p>
            <footer className="productinfo__footer">
                <div className="productinfo__footer__price">
                    <span className="productinfo__footer__price__key">Price</span>
                    <span className="productinfo__footer__price__value">{product?.price}</span>
                </div>
                <div className="productinfo__footer__q">
                    <button className="productinfo__footer__q__btn" onClick={handleMinus}>-</button>
                    <div className="productinfo__footer__q__value">{quantity}</div>
                    <button className="productinfo__footer__q__btn" onClick={handlePlus}>+</button>
                </div>
                <button className="productinfo__footer__btn" onClick={handleAddToCart}>Add to Card</button>
            </footer>
        </article>
    )
}

export default ProductInfo