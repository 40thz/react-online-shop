import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_BASKET_PRODUCT } from '../../store/actions'
import SizeBtn from './SizeBtn'

const BasketPageCard = () => {

    const dispatch = useDispatch()
    const basketArray = useSelector(state => state.basket.basketItems)

    const removeProduct = (id) => {
        const array = basketArray.filter((item) => item.id !== id);
        dispatch(REMOVE_BASKET_PRODUCT(array))
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
                            <div className="catalog__products-card-raiting">
                                В избранное
                            </div>
                            <div onClick={() => removeProduct(item.id)} className="catalog__products-card-raiting">
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
