import './styles/PurchaseCard.css'
const PurchaseCard = ({purchase}) => {

  return (
    <article className='purchasecard-container'>
        <header className='purchasecard__header'>
            <img className='purchasecard__header__img' src={purchase.product.images[0].url} alt="" />
        </header>
        <h3 className='purchasecard__title'>{purchase.product.title}</h3>
        <span className='purchasecard__quantity'>{purchase.quantity}</span>
        <div className='purchasecard__price'>{purchase.product.price}</div>
    </article>
  )
}

export default PurchaseCard