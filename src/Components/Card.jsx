import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ items, func }) => {

    const addToCartShop = (id) => {
        console.log(id)
    }

    return (
        <div className="catalog__content">
            {items.map((item, index) => (
                <div key={index} className="card">
                    <div className="card__top">
                        <Link onClick={() => func(item.id)} to={`/product/${item.id}`}>
                            <div className="card__top--logo">
                                <img src={item.logo} alt="itemLogo" />
                            </div>
                        </Link>
                    </div>
                    <div className="card__bottom">
                        <div className="card__bottom--leftSide">
                            <div onClick={() => func(item.id)} className="card__bottom--name">
                                <Link to={`/product/${item.id}`}>
                                    {item.name}
                                </Link>
                            </div>
                            <div className="card__bottom--price">{item.price} $</div>
                        </div>
                        <div className="card__bottom--rightSide">
                            <div onClick={() => addToCartShop(item.id)} className="card__bottom--btn"><img src="/shopping-cart.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Card
