import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
    id: number
    title: string
    price: number
    image: string
    quantity: number
}

export interface CartState {
    items: CartItem[]
    totalAmount: number
}

const initialState: CartState = {
    items: [],
    totalAmount: 0
}

export interface Product {
    id: number
    title: string
    price: number
    image: string
}

export interface CartItem extends Product {
    quantity: number
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addShoppingCart: (state, action: PayloadAction<CartItem>) => {
            const shoppingCartItem = state.items.find((item) => item.id === action.payload.id)
            if (shoppingCartItem) {
                shoppingCartItem.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
        },
        deleteShoppingCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
        }
    }
})

export const { addShoppingCart, deleteShoppingCart } = cartSlice.actions
export default cartSlice.reducer
