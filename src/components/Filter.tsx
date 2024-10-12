import { useDispatch } from 'react-redux'
import { sortProducts, categoryfilters } from '../redux/slices/productSlice'
import '../scss/product.scss'

const Filter = ({ handlePriceSort, handleCategory, currentSort }: { handlePriceSort: (value: string) => void; handleCategory: (category: string) => void; currentSort: string }) => {
    return (
        <div className="filter-container">
            <select onChange={(e) => handlePriceSort(e.target.value)} value={currentSort}>
                <option value="">가격 정렬</option>
                <option value="low">최저 가격순</option>
                <option value="high">최고 가격순</option>
            </select>
            <select onChange={(e) => handleCategory(e.target.value)}>
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
