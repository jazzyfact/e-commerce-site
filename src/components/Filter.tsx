import '../scss/product.scss'

const Filter = () => {
    return (
        <div className="filter-container">
            <button value="low">최저 가격순</button>
            <button value="high">최고 가격순</button>
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
