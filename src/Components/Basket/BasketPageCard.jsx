import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_BASKET_PRODUCT, SET_FAVOURITE_PRDOUCT, REMOVE_FAVOURITE_PRODUCT } from '../../store/actions'
import { addIn } from '../addIn'
import SizeBtn from './SizeBtn'

const BasketPageCard = () => {

    const dispatch = useDispatch()
    const basketArray = useSelector(state => state.basket.basketItems)
    const favouriteArray = useSelector(state => state.favourites.favouriteItems)

    const removeProduct = (type, array, id) => {
        const filtering = array.filter((item) => item.id !== id);
        dispatch(type(filtering))
    }
    return (
        <Fragment>
            {basketArray.map((item) => (
                <div key={item.id} className="catalog__products-card">
                    <div to={`/product/${item.id}`} className="catalog__products-card-logo">
                        <img src={item.logo} alt="" />
                    </div>
                    <div className="catalog__products-card-status">
                        <div to={`/product/${item.id}`} className="catalog__products-card-name">
                            {item.name}
                        </div>
                        <div className="catalog__products-card-info">
                            <div onClick={() => favouriteArray.some(prod => prod.id === item.id) ? removeProduct(REMOVE_FAVOURITE_PRODUCT, favouriteArray, item.id) : addIn(item, favouriteArray, dispatch, SET_FAVOURITE_PRDOUCT)} className="catalog__products-card-raiting">
                                {favouriteArray.some(prod => prod.id === item.id) ? <span style={{ color: '#1875f0' }}>В избранное</span> : "В избранное"}
                            </div>
                            <div onClick={() => removeProduct(REMOVE_BASKET_PRODUCT, basketArray, item.id)} className="catalog__products-card-raiting">
                                Удалить
                            </div>
                        </div>
                    </div>
                    <SizeBtn removeProduct={removeProduct} item={item} />
                    <div className="catalog__products-card-right">
                        <div className="catalog__products-card-price">
                            {item.price} ₽
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default BasketPageCard
