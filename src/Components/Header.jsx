import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const products = useSelector(state => state.prdoucts.items)

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__nav">
            <div className="home--btn">
              <img src="/home.svg" alt="home" />
            </div>
          </div>
          <div className="header__search">
            <div className="header__search--input">
              <input type="text" />
              <div className="header__search--btn"> <img src="/search-svgrepo-com.svg" alt="search" /></div>
            </div>
            <div className='searchpopup__container'>
              {products ?
                <Fragment />
                :
                <div className="searchpopup__item">
                  <div className="searchpopup__item--logo">
                    <img src="https://c.dns-shop.ru/thumb/st1/fit/500/500/61f7965fa49ebbcd1fc5ccd2d2073680/93ba7a81a786695bdf44bb60000b82231d2c42bdddbb48c877cb0b559af6f608.jpg.webp" alt="" />
                  </div>
                  <div className="searchpopup__rightside">
                    <div className="searchpopup__item--title">
                      <span>комп</span>
                    </div>
                    <div className="searchpopup__item--price">
                      <span>1023</span>
                    </div>
                    <div className="searchpopup__item--btn">
                      <span>Перейти</span>
                      <img src="./shopping-cart.svg" alt="" />
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
