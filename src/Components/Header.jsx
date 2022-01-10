import React from 'react'
import { Link } from 'react-router-dom'
import HeaderList from './HeaderList'
import HeaderNav from './HeaderNav'
import Search from './SearchModul/Search'

const Header = () => {

  return (
    <header>
      <div className="header__body">
        <div className="container">
          <div className="header__panel">
            <div className="header__panel__logo">
              <Link to={'/'}>
                REACT ONLINE SHOP
              </Link>
            </div>
            <Search />
            <HeaderList />
            {/* <Basket />*/}
          </div>
        </div>
      </div>
      <HeaderNav />
    </header>
  )
}

export default Header
