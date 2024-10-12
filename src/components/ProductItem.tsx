import '../scss/product.scss'

export interface Product {
    id: number
    title: string
    price: number
    image: string
}

interface ProductItemProps {
    product: Product
    handleAddCart: (product: Product) => void
}

const ProductItem = ({ product, handleAddCart }: ProductItemProps): JSX.Element => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddCart(product)}>장바구니</button>
        </div>
    )
}

export default ProductItem
