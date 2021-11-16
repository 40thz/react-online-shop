import React from 'react'
import { Link } from 'react-router-dom'

function SearchPopup({ items, inputValue, filtering, setProductId, setInputValue  }) {
    const unvisibleWindow = (id) =>{
        setProductId(id)
        setInputValue('');
    }
    return (
        <div>
            {filtering.map((item, index) => (
                <Link  onClick={() => unvisibleWindow(item.id)} to={`/product/${item.id}`}>
                    <div key={index} className="searchpopup__item">
                        <div className="searchpopup__item--logo">
                            <img src={item.logo} alt="" />
                        </div>
                        <div className="searchpopup__rightside">
                            <div className="searchpopup__item--title">
                                <span>{item.name}</span>
                            </div>
                            <div className="searchpopup__item--price">
                                <span>{item.price}</span>
                            </div>
                            <div className="searchpopup__item--btn">
                                <span>Перейти</span>
                                <img src="./shopping-cart.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </Link>

            ))}

        </div>
    )
}

export default SearchPopup
