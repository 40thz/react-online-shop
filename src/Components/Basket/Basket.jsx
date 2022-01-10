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
            if (basketContainer.current) if (!e.path.includes(basketContainer.current)) dispatch(TOGGLE_BASKET(false))
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
                <HeaderBtn
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20.16" height="20" viewBox="0 0 20.16 20"> <defs> <style>.cls-1 fill: #000;fillRule: evenodd;</style></defs><path id="icon" className="cls-1" d="M1283,2157a2,2,0,1,0,2,2A2,2,0,0,0,1283,2157Zm-11.99,2a2,2,0,1,0,1.99-2A2,2,0,0,0,1271.01,2159Zm13.3-14h-12.15l2.24,4.73,0.13,0.27h7.02Zm-13.1-2H1287l0.16,0.96-3.86,7.01a1.991,1.991,0,0,1-1.75,1.03h-7.45l-0.9,1.63-0.03.12a0.254,0.254,0,0,0,.25.25H1285v2h-12a2.006,2.006,0,0,1-2-2,1.933,1.933,0,0,1,.25-0.96l1.35-2.45L1269,2143h-2v-2h3.27Z" transform="translate(-1267 -2141)" /></svg>}
                    name={'Корзина'}
                    isExist={true}
                />
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
