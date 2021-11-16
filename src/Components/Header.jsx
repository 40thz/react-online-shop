import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'


function Header({items, setSearchItem, searchItem, filterCategory}) {
    return (
        
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div onClick={ () => filterCategory(null)} className="header__nav">
                        <Link to='/catalog'><div className="home--btn">
                            <img src="/home.svg" alt="home" />
                        </div>
                        </Link>
                    </div>

                    <div className="header__search">
                        {searchItem ? 
                        <Search items={items} setSearchItem={setSearchItem}/> 
                        : 'loading'}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
