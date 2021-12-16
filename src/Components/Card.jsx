import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = () => {
    const products = useSelector(state => state.prdoucts.items)

    return (
        <Fragment>
            {products.map((item, i) => (
                <div key={item.id} className="card">
                    <div className="card__top">
                        <Link to={`product/${item.id}`} className="card__top--logo">
                          <img src={item.logo} alt="itemLogo" />
                        </Link>
                    </div>
                    <div className="card__bottom">
                        <div className="card__bottom--leftSide">
                            <Link to={`product/${item.id}`} className="card__bottom--name">
                                {item.name}
                            </Link>
                            <div className="card__bottom--price">{item.price}</div>
                        </div>
                        <div className="card__bottom--rightSide">
                            <div className="card__bottom--btn"><img src="/shopping-cart.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default Card
