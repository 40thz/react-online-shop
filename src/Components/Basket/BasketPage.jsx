import React from 'react'
import { useSelector } from 'react-redux'
import BasketPageCard from './BasketPageCard'

const BasketPage = () => {
    const [price, setPrice] = React.useState(0)
    const basketArray = useSelector(state => state.basket.basketItems)

    React.useEffect(() => {
        const arr = basketArray.map((item) => item.price)
        
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        setPrice(sum)
    }, [basketArray])
    return (
        <div className="basket__page">
            <div className="container">
                <div className="main__catalog">
                    <div className="catalog__content">
                        <div className="catalog__name">
                            Корзина <span>1 товар</span>
                        </div>
                        <div className="catalog__products">
                            <BasketPageCard />
                        </div>
                    </div>
                    <div className="main__sidebar">
                        <nav>
                            <li>
                                Итого: {basketArray.length} товар на {price} ₽
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketPage
