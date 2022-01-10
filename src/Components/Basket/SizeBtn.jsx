import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PLUS_SIZE, MINUS_SIZE, REMOVE_BASKET_PRODUCT } from '../../store/actions'

const SizeBtn = ({ item, removeProduct }) => {
    const dispatch = useDispatch()
    const defaultIems = useSelector(state => state.prdoucts.items)
    const basketArray = useSelector(state => state.basket.basketItems)

    const plusSize = (id) => {
        const defPrice = defaultIems.filter(item => item.id === id)[0].price
        dispatch(PLUS_SIZE({
            id: id,
            defPrice: defPrice
        }))
    }

    const minusSize = (id, size) => {
        const defPrice = defaultIems.filter(item => item.id === id)[0].price
        if (size <= 1) {
            removeProduct(REMOVE_BASKET_PRODUCT, basketArray, id)
        } else {
            dispatch(MINUS_SIZE({
                id: id,
                defPrice: defPrice
            }))
        }
    }

    return (
        <div className="catalog__products-card-center">
            <div className="catalog__products-card-counter">
                <button onClick={() => minusSize(item.id, item.size)}>-</button>
                <span>{item.size}</span>
                <button onClick={() => plusSize(item.id, item.price)}>+</button>
            </div>
        </div>
    )
}

export default SizeBtn
