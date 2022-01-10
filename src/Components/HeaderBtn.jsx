import React from 'react'
import { useSelector } from 'react-redux'

const HeaderBtn = ({ icon, name, isExist }) => {
    const basketArray = useSelector(state => state.basket.basketItems)
    const favouriteArray = useSelector(state => state.favourites.favouriteItems)
    return (
        <li className="shopping__panel__item">
            <div className="shopping__panel__item__icon">
                {isExist && basketArray.length >= 1 ? <div className="shopping__panel__item__icon__active"></div> : ''}
                {icon}
            </div>
            <span style={{ fontSize: 14, color: 808080 }}>{name}</span>
        </li>
    )
}

export default HeaderBtn
