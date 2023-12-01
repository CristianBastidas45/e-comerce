import {Link} from "react-router-dom"
import './styles/HederNav.css' 

const HeaderNav = () => {
    return (
        <header className="nav-container">
            <h1><Link className="nav__title" to='/'>e-comerce</Link></h1>
            <nav className="nav_nav">
                <ul className="nav__nav__list">
                    <li className="nav__nav__item"><Link className="nav__link" to='/register'> <i className='bx bxs-user-plus'></i> </Link></li>
                    <li className="nav__nav__item"><Link className="nav__link" to='/login'> <i className='bx bx-user' ></i> </Link></li>
                    <li className="nav__nav__item"><Link className="nav__link" to='/cart'> <i className='bx bx-cart' ></i> </Link></li>
                    <li className="nav__nav__item"><Link className="nav__link" to='/purchases'> <i className='bx bx-purchase-tag' ></i> </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav