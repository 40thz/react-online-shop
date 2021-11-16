import React from 'react'

function SearchPopup() {
    return (
        <div>
            
                <div className="searchpopup__item">
                    <div className="searchpopup__item--logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLaDGsGqJkvCzfWDHS417Ye7Pasz9wOorhJw&usqp=CAU" alt="" />
                    </div>
                    <div className="searchpopup__rightside">
                        <div className="searchpopup__item--title">
                            <span>Планшет Apple iPhone</span>
                        </div>
                        <div className="searchpopup__item--price">
                            <span>1800 $</span>
                        </div>
                        <div className="searchpopup__item--btn">
                            <span>Перейти</span>
                            <img src="./shopping-cart.svg" alt="" />
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default SearchPopup
