import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { SET_CURRENT_CATEGORY, SET_CURRENT_TAB, SET_BASKET_PRDOUCT, REMOVE_BASKET_PRODUCT } from '../store/actions'

const Card = () => {

    const defaultIems = useSelector(state => state.prdoucts.items)
    const [products, setProducts] = React.useState(defaultIems)
    const basketArray = useSelector(state => state.basket.basketItems)
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

        const card = {
            id: item.id,
            logo: item.logo,
            name: item.name,
            price: item.price,
            size: 1
        }
        if (basketArray.length) {
            if (basketArray.some(elem => elem.id === item.id)) {
                return
            } else {
                dispatch(SET_BASKET_PRDOUCT(card))
            }
        } else {
            dispatch(SET_BASKET_PRDOUCT(card))
        }
    }

    const removeProduct = (id) => {
        const array = basketArray.filter((item) => item.id !== id);
        dispatch(REMOVE_BASKET_PRODUCT(array))
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
                            <div onClick={() => basketArray.some(prod => prod.id === item.id) ?
                                removeProduct(item.id) :
                                addInBasket(item)}
                                className="card__bottom--btn">
                                <img src={basketArray.some(prod => prod.id === item.id) ?
                                    "/bag-remove-svgrepo-com.svg" :
                                    '/shopping-cart.svg'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default Card
