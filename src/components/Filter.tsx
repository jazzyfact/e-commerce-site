import { useDispatch } from 'react-redux'
import { sortProducts } from '../redux/slices/productSlice'
import '../scss/product.scss'

const Filter = ({ handlePriceSort }: { handlePriceSort: (value: string) => void }) => {
    return (
        <div className="filter-container">
            <button onClick={() => handlePriceSort('low')}>최저 가격순</button>
            <button onClick={() => handlePriceSort('high')}>최고 가격순</button>
            <select>
                <option value="all">전체</option>
                <option value="electronics">전자기기</option>
                <option value="jewelery">액세서리</option>
                <option value="men's clothing">남성의류</option>
                <option value="women's clothing">여성의류</option>
            </select>
        </div>
    )
}

export default Filter
