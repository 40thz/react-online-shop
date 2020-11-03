import React, { Fragment } from 'react'

function Search() {
    const [inputValue, setInputValue] = React.useState('');
    return (
        <Fragment>
            <div className="header__search--input">
                <input onInput={(e) => setInputValue(e.target.value)} type="text"/>
            </div>
            <div onClick={() => console.log(inputValue)} className="header__search--btn">search</div>
        </Fragment>
    )
}

export default Search
