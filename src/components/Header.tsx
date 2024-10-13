import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import '../scss/header.scss'

const Header = () => {
    const cartItemsCount = useSelector((state: RootState) => state.cart.items.reduce((count, item) => count + item.quantity, 0))

    return (
        <header>
            <nav>
                <Link to="/">홈</Link>
                <Link to="/cart">
                    장바구니
                    {cartItemsCount > 0 && <span className="cart-count">({cartItemsCount})</span>}
                </Link>
            </nav>
        </header>
    )
}

export default Header
