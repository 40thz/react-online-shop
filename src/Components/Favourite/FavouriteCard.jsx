import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FAVOURITE_PRODUCT } from '../../store/actions'

const FavouriteCard = () => {
    const dispatch = useDispatch()
    const favouriteArray = useSelector(state => state.favourites.favouriteItems)

    const removeProduct = (id) => {
        const array = favouriteArray.filter((item) => item.id !== id);
        dispatch(REMOVE_FAVOURITE_PRODUCT(array))
    }
    return (
        <Fragment>
            {favouriteArray.map((item) => (
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

export default FavouriteCard
