import React, { Fragment } from 'react'
import SearchPopup from './SearchPopup'
import classnames from 'classnames';


function Search({ items, setSearchItem, setProductId  }) {
    const [inputValue, setInputValue] = React.useState('');
    
        const filtering = items.filter(product => {
            return product.name.toLowerCase().includes(inputValue.toLowerCase());
        })
    return (
        <Fragment>
           <div className="header__search--input">
                <input onInput={(e) => setInputValue(e.target.value)} type="text" />
                <div onClick={() => setSearchItem(filtering)} className="header__search--btn"> <img src="/search-svgrepo-com.svg" alt="search" /></div>
            </div>
            <div className={classnames('searchpopup__container', !inputValue ? 'dn' : '')}>
                <SearchPopup setProductId={setProductId} filtering={filtering} setInputValue={setInputValue} inputValue={inputValue} items={items} />
            </div>
            
        </Fragment>
    )
}

export default Search
