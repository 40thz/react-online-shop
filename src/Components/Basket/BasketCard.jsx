import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_BASKET_PRODUCT } from '../../store/actions'

const BasketCard = () => {
    const dispatch = useDispatch()
    const basketArray = useSelector(state => state.basket.basketItems)

    const removeProduct = (id) => {
        const array = basketArray.filter((item) => item.id !== id);
        dispatch(REMOVE_BASKET_PRODUCT(array))
    }

    return (
        <Fragment>
            {basketArray.map((item) => (
                <div key={item.id} className="basket--content-card">
                    <div className="basket--content-card-leftSide">
                        <div className="basket--content-card-logo">
                            <img src={item.logo} alt="logo" />
                        </div>
                        <div className="basket--content-card-name">
                            {item.name}
                        </div>
                    </div>
                    <div className="basket--content-card-leftSide">
                        <div className="basket--content-card-price">{item.price} ₽</div>
                        <div onClick={() => removeProduct(item.id)} className="basket--content-card-removeBtn">
                            <img src="/bag-remove-svgrepo-com.svg" alt="remove" />
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default BasketCard
