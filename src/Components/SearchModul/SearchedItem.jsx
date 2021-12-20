import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SearchedItem = ({ clearSeacrh }) => {
    const items = useSelector(state => state.search.items)

    return (
        <Fragment>
            {items.map((item) => (
                <div key={item.id} className="searchpopup__item">
                    <div className="searchpopup__item--title">
                        <span onClick={() => clearSeacrh()}><Link to={`/product/${item.id}`}>{item.name}</Link></span>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default SearchedItem
