import React from 'react'

const HeaderNav = () => {
    return (
        <div className="header__navbar">
            <div className="container">
                <nav className="header__navbar__list">
                    <li className="header__navbar__list__categories">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12">
                                <defs>
                                    <style>
                                        .cls-1
                                        fill: gray;
                                        fillRule: evenodd;

                                    </style>
                                </defs>
                                <path id="menu_icon" data-name="menu icon" className="cls-1"
                                    d="M565,2239v2h18v-2H565Zm0,7h18v-2H565v2Zm0,5h18v-2H565v2Z"
                                    transform="translate(-565 -2239)" />
                            </svg>
                            Все категории</a>
                    </li>
                    <li><a href="#">Супер предложения</a></li>
                    <li><a href="#">Знаменитые бренды</a></li>
                    <li><a href="#">Коллекции</a></li>
                    <li><a href="#">Бестселлер</a></li>
                    <div className="header__navbar__list__right">
                        <div className="dropdown">
                            <span>Помощь
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                                    <defs>
                                        <style>
                                            .cls-1
                                            fill: #b3b3b3;
                                            fillRule: evenodd;

                                        </style>
                                    </defs>
                                    <path id="arrow_icon" data-name="arrow icon" className="cls-1"
                                        d="M1469,2249l5-3v-2.88l-5,3.02-5-3.14v3Z" transform="translate(-1464 -2243)" />
                                </svg>
                            </span>
                            <div className="dropdown-content">
                                <a href="#">F.A.Q.</a>
                                <a href="#">Оплата</a>
                                <a href="#">Доставка</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <span>USD
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                                    <defs>
                                        <style>
                                            .cls-1
                                            fill: #b3b3b3;
                                            fillRule: evenodd;

                                        </style>
                                    </defs>
                                    <path id="arrow_icon" data-name="arrow icon" className="cls-1"
                                        d="M1469,2249l5-3v-2.88l-5,3.02-5-3.14v3Z" transform="translate(-1464 -2243)" />
                                </svg>
                            </span>
                            <div className="dropdown-content">
                                <a href="#">USD</a>
                                <a href="#">RUB</a>
                                <a href="#">UAH</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <span>Языки
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                                    <defs>
                                        <style>
                                            .cls-1
                                            fill: #b3b3b3;
                                            fillRule: evenodd;

                                        </style>
                                    </defs>
                                    <path id="arrow_icon" data-name="arrow icon" className="cls-1"
                                        d="M1469,2249l5-3v-2.88l-5,3.02-5-3.14v3Z" transform="translate(-1464 -2243)" />
                                </svg>
                            </span>
                            <div className="dropdown-content">
                                <a href="#">English</a>
                                <a href="#">Russia</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderNav
