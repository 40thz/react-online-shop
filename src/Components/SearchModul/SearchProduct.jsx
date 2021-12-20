import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { SET_SEARCH_PRODUCTS } from '../../store/actions'
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
                {items.length >= 1 ? 
                <span className='header-search'>Найдено: {items.length}</span> 
                
                : 
                
                <span>Товаров с таким названием не найдено</span>}
            </div>
            <div className="main__catalog">
                <FilteringPanel />
                <div className="catalog__content">
                    <div className="catalog__name">
                        Резултат по запросу: {params.nameProduct}
                    </div>
                    <div className="catalog__products">
                        {items.length >= 1 ? <SearchCard /> : 'load'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct
