import React from 'react'
import { useDispatch } from 'react-redux'
import { PLUS_SIZE, MINUS_SIZE } from '../../store/actions'

const SizeBtn = ({ item, removeProduct }) => {
    const dispatch = useDispatch()

    const plusSize = (id) => {
        dispatch(PLUS_SIZE(id))
    }

    const minusSize = (id, size) => {
        if (size <= 1) {
            removeProduct(id)
        } else {
            dispatch(MINUS_SIZE(id))
        }
    }

    return (
        <div className="catalog__products-card-center">
            <div className="catalog__products-card-counter">
                <button onClick={() => minusSize(item.id, item.size)}>-</button>
                <span>{item.size}</span>
                <button onClick={() => plusSize(item.id)}>+</button>
            </div>
        </div>
    )
}

export default SizeBtn
