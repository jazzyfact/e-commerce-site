import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import CartItem from './CartItem'
import { deleteShoppingCart } from '../redux/slices/cartSlice'
import '../scss/cart.scss'

const Cart = () => {
    const dispatch = useDispatch()
    const { items, totalAmount } = useSelector((state: RootState) => state.cart)

    const handleRemoveCart = (id: number) => {
        dispatch(deleteShoppingCart(id))
    }

    return (
        <div className="cart-list">
            <h2>장바구니</h2>
            {items.length === 0 ? (
                <p className="empty-cart">장바구니에 담긴 상품이 없습니다</p>
            ) : (
                items.map((item) => <CartItem key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} quantity={item.quantity} handleRemoveCart={handleRemoveCart} />)
            )}
            <h3 className="total">총 금액: ${totalAmount.toFixed(2)}</h3>
        </div>
    )
}

export default Cart
