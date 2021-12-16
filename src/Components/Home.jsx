import React from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
const Home = () => {
    const products = useSelector(state => state.prdoucts.items)

    return (
        <div className="container">
            <div className="main__catalog">
                <Sidebar items={[
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
                ]}/>
                <div className="catalog__content">
                    {products ? <Card /> : 'LOAD'}
                </div>
            </div>
        </div>
    )
}

export default Home
