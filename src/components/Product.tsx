import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, sortProducts, categoryfilters } from '../redux/slices/productSlice'
import { addShoppingCart } from '../redux/slices/cartSlice'
import { RootState } from '../redux/store'
import Spinner from './Spinner'
import Filter from './Filter'
import ProductItem from './ProductItem'
import '../scss/product.scss'

export interface Product {
    id: number
    title: string
    price: number
    image: string
    category: string
}

type ProductState = {
    products: Product[]
    priceSortProducts: Product[]
    loading: boolean
    error: string | null
    sort: string
    category: string
}

const Product = (): JSX.Element => {
    const dispatch = useDispatch()
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
        dispatch(addShoppingCart(product))
    }

    return (
        <div>
            <Filter handlePriceSort={handlePriceSort} handleCategory={handleCategory} currentSort={sort} />
            <div className="product-list">
                {(priceSortProducts.length > 0 ? priceSortProducts : products).map((product: Product) => (
                    <ProductItem key={product.id} product={product} handleAddCart={handleAddCart} />
                ))}
            </div>
        </div>
    )
}

export default Product
