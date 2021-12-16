import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_CURRENT_ITEM, SET_CURRENT_TAB } from '../store/actions'

const Card = () => {
    const products = useSelector(state => state.prdoucts.items)
    const dispatch = useDispatch();
    
    const setItem = (id) => {
        const payload = {
            products: products,
            currentId: id
        }
        dispatch(SET_CURRENT_ITEM(payload))
        dispatch(SET_CURRENT_TAB(false))
    }

    return (
        <Fragment>
            {products.map((item, i) => (
                <div key={item.id} className="card">
                    <div className="card__top">
                        <Link onClick={() => setItem(item.id)} to={`product/${item.id}`} className="card__top--logo">
                            <img src={item.logo} alt="itemLogo" />
                        </Link>
                    </div>
                    <div className="card__bottom">
                        <div className="card__bottom--leftSide">
                            <Link onClick={() => setItem(item.id)} to={`product/${item.id}`} className="card__bottom--name">
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
