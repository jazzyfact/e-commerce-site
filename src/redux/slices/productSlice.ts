import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts, Product } from '../../api/api'

export interface ProductState {
    products: Product[]
    priceSortProducts: Product[]
    loading: boolean
    error: string | null
    sort: string
}

const initialState: ProductState = {
    products: [] as Product[],
    priceSortProducts: [] as Product[],
    loading: false,
    error: null,
    sort: ''
}

export const getProducts = createAsyncThunk('/get', async () => {
    return await fetchProducts()
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortProducts: (state, action) => {
            state.priceSortProducts = [...state.products]
            if (action.payload === 'low') {
                state.priceSortProducts.sort((product1, product2) => product1.price - product2.price)
            } else if (action.payload === 'high') {
                state.priceSortProducts.sort((product1, product2) => product2.price - product1.price)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.priceSortProducts = action.payload
                state.loading = false
            })
            .addCase(getProducts.rejected, (state) => {
                state.loading = false
                state.error = '상품을 가져오는데 실패했습니다'
            })
    }
})

export const { sortProducts } = productSlice.actions
export default productSlice.reducer
