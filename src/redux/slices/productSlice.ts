import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts, Product } from '../../api/api'

export interface ProductState {
    products: Product[]
    priceSortProducts: Product[]
    loading: boolean
    error: string | null
    sort: string
    category: string
}

const initialState: ProductState = {
    products: [] as Product[],
    priceSortProducts: [] as Product[],
    loading: false,
    error: null,
    sort: '',
    category: 'all'
}

export const getProducts = createAsyncThunk('/get', async () => {
    return await fetchProducts()
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortProducts: (state, action) => {
            state.sort = action.payload
            const currentProducts = state.category === 'all' ? state.products : state.priceSortProducts
            if (action.payload === 'low') {
                state.priceSortProducts = [...currentProducts].sort((product1, product2) => product1.price - product2.price)
            } else if (action.payload === 'high') {
                state.priceSortProducts = [...currentProducts].sort((product1, product2) => product2.price - product1.price)
            }
        },
        categoryfilters: (state, action) => {
            state.category = action.payload
            if (action.payload === 'all') {
                state.priceSortProducts = [...state.products]
            } else {
                state.priceSortProducts = state.products.filter((product) => product.category === action.payload)
            }

            if (state.sort) {
                state.priceSortProducts.sort((product1, product2) => (state.sort === 'low' ? product1.price - product2.price : product2.price - product1.price))
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

export const { sortProducts, categoryfilters } = productSlice.actions
export default productSlice.reducer
