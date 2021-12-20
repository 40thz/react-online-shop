import React from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'

const Home = () => {
    const products = useSelector(state => state.prdoucts.items)
    const currentCategory = useSelector(state => state.category.currentCategory)
    const categories = useSelector(state => state.category.categories)
    React.useEffect(() => {
        document.title = 'Главаня страница - react-online-shop'
    })
    return (
        <div className="container">
            <div className="main__catalog">
                <Sidebar items={[
                    {
                        name: 'Все товарры',
                        type: 'all'
                    },
                    {
                        name: 'Компьютеры',
                        category: 1
                    },
                    {
                        name: 'Ноутбуки',
                        category: 2
                    },
                    {
                        name: 'Планшеты',
                        category: 3
                    },
                    {
                        name: 'Телефоны',
                        category: 4
                    },
                    {
                        name: 'Часы',
                        category: 5
                    },
                    {
                        name: 'Микрофоны',
                        category: 6
                    },
                ]
                } />

                <div className="catalog__content">
                    <div className="catalog__name">
                        {currentCategory ? categories[currentCategory] : 'Все товары'}
                    </div>
                    <div className="catalog__products">
                        {products ? <Card /> : 'LOAD'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
