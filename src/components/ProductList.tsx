import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, sortProducts, categoryfilters } from '../redux/slices/productSlice'
import { addShoppingCart, CartItem } from '../redux/slices/cartSlice'
import { RootState } from '../redux/store'
import Spinner from './Spinner'
import Filter from './Filter'
import ProductItem from './ProductItem'
import { AppDispatch } from '../redux/store'
import { Product } from '../api/api'
import '../scss/product.scss'

type ProductState = {
    products: Product[]
    priceSortProducts: Product[]
    loading: boolean
    error: string | null
    sort: string
    category: string
}

const ProductList = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>()
    const { products, priceSortProducts, loading, error, sort, category } = useSelector<RootState, ProductState>((state) => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(categoryfilters(category))
        dispatch(sortProducts(sort))
    }, [category, dispatch, sort])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div>{error}</div>
    }

    const handlePriceSort = (value: string) => {
        dispatch(sortProducts(value))
    }

    const handleCategory = (category: string) => {
        dispatch(categoryfilters(category))
    }

    const handleAddCart = (product: Product) => {
        const cartItem: CartItem = { ...product, quantity: 1 }
        dispatch(addShoppingCart(cartItem))
    }

    return (
        <div>
            <Filter handlePriceSort={handlePriceSort} handleCategory={handleCategory} currentSort={sort} />
            <div className={'product-list'}>
                {(priceSortProducts.length > 0 ? priceSortProducts : products).map((product: Product) => (
                    <ProductItem key={product.id} product={product} handleAddCart={handleAddCart} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
