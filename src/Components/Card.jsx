import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { SET_CURRENT_CATEGORY, SET_CURRENT_TAB, SET_BASKET_PRDOUCT, TOGGLE_BASKET } from '../store/actions'

const Card = () => {
    
    const defaultIems = useSelector(state => state.prdoucts.items)
    const [products, setProducts] = React.useState(defaultIems)
    const dispatch = useDispatch()
    const params = useParams();

    React.useEffect(() => {
        if (params.categoryId) {
            const filter = defaultIems.filter((item) => item.category === parseInt(params.categoryId))
            setProducts(filter)
            dispatch(SET_CURRENT_CATEGORY(parseInt(params.categoryId)))
        } else {
            setProducts(defaultIems)
        }
        dispatch(SET_CURRENT_TAB())
    }, [params.categoryId])

    const addInBasket = (item) => {
        dispatch(SET_BASKET_PRDOUCT(item))
        dispatch(TOGGLE_BASKET(true))
    }
    return (
        <Fragment>
            {products.map((item, i) => (
                <div key={item.id} className="card">
                    <div className="card__top">
                        <Link to={`/product/${item.id}`} className="card__top--logo">
                            <img src={item.logo} alt="itemLogo" />
                        </Link>
                    </div>
                    <div className="card__bottom">
                        <div className="card__bottom--leftSide">
                            <Link to={`/product/${item.id}`} className="card__bottom--name">
                                {item.name}
                            </Link>
                            <div className="card__bottom--price">{item.price} ₽</div>
                        </div>
                        <div className="card__bottom--rightSide">
                            <div onClick={() => addInBasket(item)} className="card__bottom--btn"><img src="/shopping-cart.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default Card
