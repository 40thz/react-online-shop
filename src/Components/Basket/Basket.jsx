import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HeaderBtn from '../HeaderBtn'
import { TOGGLE_BASKET, REMOVE_BASKET_PRODUCT } from '../../store/actions'
import BasketCard from './BasketCard'
import { Link } from 'react-router-dom'

const Basket = () => {
    const dispatch = useDispatch()
    const basketIsActive = useSelector(state => state.basket.baksetIsActive)
    const basketArray = useSelector(state => state.basket.basketItems)
    const [sum, setSum] = React.useState(Number)
    const basketContainer = React.useRef()

    React.useEffect(() => {
        const handleClick = (e) => {
            if (!e.path.includes(basketContainer.current)) dispatch(TOGGLE_BASKET(false))
        }

        const arr = basketArray.map((item) => item.price)

        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        setSum(sum)

        document.body.addEventListener('click', handleClick)
        return document.body.addEventListener('click', handleClick)
    }, [basketArray])

    const clearBasket = () => {
        dispatch(REMOVE_BASKET_PRODUCT([]))
    }

    return (
        <div ref={basketContainer} className='basket__container'>
            <div onClick={() => dispatch(TOGGLE_BASKET(!basketIsActive))}>
                <HeaderBtn icon={`/shopping-cart.svg`} />
            </div>
            {basketIsActive &&
                <div className="basket">
                    <div className="basket--header">
                        <div className="basket--header-title">
                            Основные товары ({basketArray.length ? basketArray.length : '0'})
                        </div>
                        <div onClick={() => clearBasket()} className="basket--header-clearBasket">
                            Очистить список
                        </div>
                    </div>
                    <div className="basket--content">
                        <BasketCard />
                    </div>
                    <div className="basket--footer">
                        <div className="basket--footer-sum">
                            <div className="basket--footer-sum-name">
                                Итого:
                            </div>
                            <div className="basket--footer-sum-price">
                                {sum} ₽
                            </div>
                        </div>
                        <div className="basket--footer-btns">
                            <div className="basket--footer-btn">
                                Оформить заказ
                            </div>
                            <Link onClick={() => dispatch(TOGGLE_BASKET(false))} to={'/basket'}>
                                <div className="basket--footer-btn">
                                    В корзину
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Basket
