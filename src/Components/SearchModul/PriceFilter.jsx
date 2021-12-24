import React, { Fragment } from 'react'

const PriceFilter = ({priceQuery, setPriceQuery}) => {
    const handleChangePrice = (e) => {
        const arr = [...priceQuery];
        if (e.target.name === 'fistPrice') {
            arr[0] = e.target.value;
            setPriceQuery(arr)
        } else if (e.target.name === 'lastPrice') {
            arr[1] = e.target.value;
            setPriceQuery(arr)
        }
    }
    return (
        <Fragment>
            <li>
                <div className="icon">
                    <img src="/down-svgrepo-com.svg" alt="" />
                </div>
                Цена
            </li>
            <li className='filterPanel__price'>
                <input onChange={(e) => handleChangePrice(e)} type="number" name='fistPrice' placeholder='от 100' value={priceQuery[0]} />
                <input onChange={(e) => handleChangePrice(e)} type="number" name='lastPrice' placeholder='до 200' value={priceQuery[1]} />
            </li>
        </Fragment>
    )
}

export default PriceFilter
