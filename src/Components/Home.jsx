import React from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'

const Home = () => {
    const products = useSelector(state => state.prdoucts.items)
    const [categoryName, SetCategoryName] = React.useState('Все товары')

    return (
        <div className="container">
            <div className="main__catalog">
                <Sidebar SetCategoryName={SetCategoryName} items={[
                    {
                        name: 'Все товарры',
                        category: 'all'
                    },
                    {
                        name: 'Компьютеры',
                        category: 0
                    },
                    {
                        name: 'Ноутбуки',
                        category: 1
                    },
                    {
                        name: 'Планшеты',
                        category: 2
                    },
                    {
                        name: 'Телефоны',
                        category: 3
                    },
                    {
                        name: 'Часы',
                        category: 4
                    },
                ]} />

                <div className="catalog__content">
                    <div className="catalog__name">
                        {categoryName}
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
