import React, { Fragment } from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import Header from './Header'
import Carousel from './Carousel'

const Home = () => {
    const products = useSelector(state => state.prdoucts.items)
    const currentCategory = useSelector(state => state.category.currentCategory)
    const categories = useSelector(state => state.category.categories)

    React.useEffect(() => {
        document.title = 'Главаня страница - react-online-shop'
    })
    return (
        <Fragment>
            <Header />
            <Carousel />
            <div className="container">
                <div className="main__content">
                    <div className="main__content__sidebar">
                        <Sidebar
                            items={
                                categories.map((item, i) => (
                                    {
                                        name: item.name,
                                        icon: item.icon,
                                        category: i
                                    }
                                ))

                            } />
                    </div>
                    <div className="main__content__catalog">
                        <div className="main__content__catalog__board">
                            <nav className="main__content__catalog__board__nav">
                                <li><a className="nav__active" href="#"> { currentCategory === null ? 'Все товары' : categories[currentCategory].name}</a></li>
                            </nav>
                        </div>
                        <div className="main__content__catalog__items">
                            {products ? <Card /> : 'LOAD'}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
