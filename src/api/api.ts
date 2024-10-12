import axios from 'axios'

export interface Product {
    id: number
    title: string
    price: number
    category: string
    image: string
}

const API_URL = 'https://fakestoreapi.com/products'

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>(API_URL)
        return response.data
    } catch (error) {
        throw new Error('상품을 가져오는데 실패했습니다')
    }
}
