import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { SET_CURRENT_ITEM, SET_CURRENT_TAB, FITER_ITEMS } from '../store/actions'

const Card = () => {
    const defaultIems = useSelector(state => state.prdoucts.items)
    const filterItems = useSelector(state => state.prdoucts.filterItems)
    const [products, setProducts] = React.useState(defaultIems)
    const dispatch = useDispatch();
    const params = useParams();

    React.useEffect(() => {

        if (filterItems.length >= 1) {
            setProducts(filterItems)
        } else {
            setProducts(defaultIems)
            if (params.categoryId) {
                const payload = {
                    products: products,
                    category: parseInt(params.categoryId),
                }
                dispatch(FITER_ITEMS(payload))
            }
        }

    })
    const setItem = (id) => {
        const payload = {
            products: products,
            currentId: id
        }
        dispatch(SET_CURRENT_ITEM(payload))
        dispatch(SET_CURRENT_TAB())
    }

    return (
        <Fragment>
            {products.map((item, i) => (
                <div key={item.id} className="card">
                    <div className="card__top">
                        <Link onClick={() => setItem(item.id)} to={`/product/${item.id}`} className="card__top--logo">
                            <img src={item.logo} alt="itemLogo" />
                        </Link>
                    </div>
                    <div className="card__bottom">
                        <div className="card__bottom--leftSide">
                            <Link onClick={() => setItem(item.id)} to={`/product/${item.id}`} className="card__bottom--name">
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
