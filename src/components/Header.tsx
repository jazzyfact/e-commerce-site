// Header.tsx
import { Link } from 'react-router-dom'
import '../scss/header.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">홈</Link>
                <Link to="/cart">장바구니</Link>
            </nav>
        </header>
    )
}

export default Header
