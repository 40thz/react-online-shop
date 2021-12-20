import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SearchCard = () => {
    const items = useSelector(state => state.search.items)

    return (
        <Fragment>
            {items.map((item) => (
                <div key={item.id} className="catalog__products-card">
                    <Link  to={`/product/${item.id}`} className="catalog__products-card-logo">
                        <img src={item.logo} alt="" />
                    </Link>
                    <div className="catalog__products-card-status">
                        <Link to={`/product/${item.id}`} className="catalog__products-card-name">
                           {item.name}
                        </Link>
                        <div className="catalog__products-card-info">
                            <div className="catalog__products-card-raiting">
                                <div className="catalog__products-card-icon">
                                    <img src="/rate-svgrepo-com.svg" alt="" />
                                </div>
                                <span>432</span>
                            </div>
                            <div className="catalog__products-card-raiting">
                                <div className="catalog__products-card-icon">
                                    <img src="/comment-alt-svgrepo-com.svg" alt="" />
                                </div>
                                <span>432</span>
                            </div>
                        </div>
                    </div>
                    <div className="catalog__products-card-right">
                        <div className="catalog__products-card-price">
                           {item.price} ₽
                        </div>
                        <div className="catalog__products-card-buying">
                            Купить
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default SearchCard
