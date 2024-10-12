import React from 'react'

export interface CartItemProps {
    id: number
    title: string
    image: string
    price: number
    quantity: number
    handleRemoveCart: (id: number) => void
}

const CartItem = ({ id, title, image, price, quantity, handleRemoveCart }: CartItemProps): JSX.Element => {
    return (
        <div className="cart-item">
            <img src={image} alt={title} />
            <div className="item-details">
                <h3>{title}</h3>
                <p>
                    ${price.toFixed(2)} x {quantity}개
                </p>
            </div>
            <button onClick={() => handleRemoveCart(id)}>삭제</button>
        </div>
    )
}

export default CartItem
