import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { SET_RESERV, SET_SEARCH_PRODUCTS } from '../../store/actions'
import FilteringPanel from './FilteringPanel';
import SearchCard from './SearchCard';
import Header from '../Header';

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
        console.log(items)
    }, [products])

    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="main__content">
                    <div className="main__content__sidebar">
                        <FilteringPanel />
                    </div>
                    <div className="main__content__catalog">
                        <div className="main__content__catalog__board">
                            <nav className="main__content__catalog__board__nav">
                                <li><a className="nav__active" href="#">  Вы искали: {items.length && items[0].name.split(" ")[0]}</a></li>
                            </nav>
                        </div>
                        <div className="main__content__catalog__items">
                            {items.length >= 1 ? <SearchCard /> : 'Товаров не найдено'}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default SearchProduct
