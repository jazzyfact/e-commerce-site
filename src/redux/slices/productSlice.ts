import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts, Product } from '../../api/api'

export interface ProductState {
    products: Product[]
    loading: boolean
    error: string | null
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
}

export const getProducts = createAsyncThunk('/get', async () => {
    return await fetchProducts()
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            .addCase(getProducts.rejected, (state) => {
                state.loading = false
                state.error = '상품을 가져오는데 실패했습니다'
            })
    }
})

export default productSlice.reducer
