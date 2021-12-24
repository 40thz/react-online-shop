import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { SET_RESERV, SET_SEARCH_PRODUCTS } from '../../store/actions'
import FilteringPanel from './FilteringPanel';
import SearchCard from './SearchCard';

const SearchProduct = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const products = useSelector(state => state.prdoucts.items)
    const items = useSelector(state => state.search.items)

    const filterItems = () => {
        const paramName = params.nameProduct.toLowerCase()
        const filtering = products.filter((item) => item.name.toLowerCase().includes(paramName))
        dispatch(SET_SEARCH_PRODUCTS(filtering))
        dispatch(SET_RESERV(filtering))
    }

    React.useEffect(() => {
        if (products) {
            filterItems()

        }
        document.title = `Поиск товаров`
    }, [products])

    return (
        <div className="container">
            <div className="header-search">
                    <span className='header-search'>Найдено: {items.length >= 1 ? items.length : "нет"} {items.length >= 9 ? 'товаров': 'товара'}</span>
            </div>
            <div className="main__catalog">
                <FilteringPanel />
                
                <div className="catalog__content">
                    <div className="catalog__name">
                        Вы искали: {params.nameProduct}
                    </div>
                    <div className="catalog__products">
                        {items.length >= 1 ? <SearchCard /> : 'Товаров не найдено'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct
