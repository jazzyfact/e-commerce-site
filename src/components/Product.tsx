import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/slices/productSlice'
import { RootState } from '../redux/store'
import Spinner from './Spinner'
import '../scss/product.scss'

interface Product {
    id: number
    title: string
    price: number
    image: string
}

const Product = () => {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return { error }
    }

    return (
        <div className="product-list">
            {products.map((product: Product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <button>장바구니</button>
                </div>
            ))}
        </div>
    )
}

export default Product
