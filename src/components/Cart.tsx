import CartItem from './CartItem'
import '../scss/cart.scss'

const Cart = () => {
    return (
        <div className="cart-list">
            <h2>장바구니</h2>
            <CartItem />
            <h3 className="total">총 금액</h3>
        </div>
    )
}

export default Cart
