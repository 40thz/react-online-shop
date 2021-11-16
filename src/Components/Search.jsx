import React, { Fragment } from 'react'
import SearchPopup from './SearchPopup'


function Search({ items, setSearchItem  }) {
    const [inputValue, setInputValue] = React.useState('');
    
        const filtering = items.filter(product => {
            return product.name.toLowerCase().includes(inputValue.toLowerCase());
        })
    return (
        <Fragment>
           <div className="header__search--input">
                <input onChange={(e) => console.log(e.target.value)} onInput={(e) => setInputValue(e.target.value)} type="text" />
                <div onClick={() => setSearchItem(filtering)} className="header__search--btn"> <img src="./search-svgrepo-com.svg" alt="home" /></div>
            </div>
            <div className="searchpopup__container">
                <SearchPopup />
                <SearchPopup />
                <SearchPopup />
            </div>
            
        </Fragment>
    )
}

export default Search
