import React, { Fragment } from 'react'

const BrandsFilter = ({reservItems, brandsInput, brandsQuery, setBrandsQuery}) => {
    const brands = reservItems.map((item) => item.brand).filter((e, i, a) => a.indexOf(e) === i);

    const handleChangeBrand = (e, item) => {
        if (e.target.checked) {
            setBrandsQuery([...brandsQuery, item])
        } else {
            const indexItem = brandsQuery.indexOf(item)
            brandsQuery.splice(indexItem, 1)
        }
    }
    return (
        <Fragment>
            <li>
                <div className="icon">
                    <img src="/down-svgrepo-com.svg" alt="" />
                </div>
                Производитель
            </li>
            <li style={{alignItems: 'flex-start'}} className='filterPanel__company'>
                {brands.map((item, i) => (
                    <label key={i}>
                        <input ref={el => brandsInput.current[i] = el} onChange={(e) => handleChangeBrand(e, item)} type="checkbox" name={item} />
                        {item}
                    </label>
                ))}
            </li>
        </Fragment>
    )
}

export default BrandsFilter
