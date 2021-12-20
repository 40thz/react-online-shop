import React from 'react'
import { Link } from 'react-router-dom'
import Search from './SearchModul/Search'

const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__nav">
            <Link to={'/'} className="home--btn">
              <img src="/home.svg" alt="home" />
            </Link>
          </div>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Header
