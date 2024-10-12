import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, sortProducts } from '../redux/slices/productSlice'
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
}

type ProductState = {
    products: Product[]
    priceSortProducts: Product[]
    loading: boolean
    error: string | null
}

const Product = (): JSX.Element => {
    const dispatch = useDispatch()
    const { products, priceSortProducts, loading, error } = useSelector<RootState, ProductState>((state) => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div>{error}</div>
    }

    const handlePriceSort = (value: string) => {
        dispatch(sortProducts(value))
    }

    return (
        <div>
            <Filter handlePriceSort={handlePriceSort} />
            <div className="product-list">
                {(priceSortProducts.length > 0 ? priceSortProducts : products).map((product: Product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Product
