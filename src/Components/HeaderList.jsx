import React from 'react'
import Basket from './Basket/Basket'
import Favourite from './Favourite/Favourite'
import HeaderBtn from './HeaderBtn'

const HeaderList = () => {
    return (
        <div className="header__panel__list">
            <ul className="shopping__panel">
                <Basket />
                <Favourite />
                    <HeaderBtn
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs> <style>.cls-1 fill: gray;ill-rule: evenodd; </style></defs><path id="user_icon" data-name="user icon" className="cls-1" d="M1533,2152c-2.67,0-8,1.34-8,4v3h16v-3C1541,2153.34,1535.67,2152,1533,2152Zm0-9a4,4,0,1,0,4,4A4,4,0,0,0,1533,2143Zm0,10.9c2.97,0,6.1,1.46,6.1,2.1v1.1h-12.2V2156C1526.9,2155.36,1530.03,2153.9,1533,2153.9Zm0-9a2.1,2.1,0,1,1-2.1,2.1A2.1,2.1,0,0,1,1533,2144.9Z" transform="translate(-1525 -2143)" /> </svg>}
                        name={'Войти'}
                    />
            </ul>
        </div>
    )
}

export default HeaderList
