import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__nav">
                        <Link to='/catalog'><div className="home--btn">
                            <img src="/home.svg" alt="home" />
                            <span>home</span>
                        </div>
                        </Link>
                    </div>

                    <div className="header__search">
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
