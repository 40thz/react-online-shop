import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { SET_SEARCH_PRODUCTS } from '../../store/actions'
import BrandsFilter from './BrandsFilter';
import BtnPanel from './BtnPanel';
import InputChecked from './InputChecked';
import PriceFilter from './PriceFilter';

const FilteringPanel = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [brandsQuery, setBrandsQuery] = React.useState(searchParams.has('brands') ? searchParams.get('brands').split(' ') : [])
    const [priceQuery, setPriceQuery] = React.useState(searchParams.has('price') ? searchParams.get('price').split(' ') : ['0', Infinity])
    const [raitingCheck, setRaitingCheck] = React.useState(searchParams.has('raiting') ? searchParams.get('raiting') : false)
    const [overviewCheck, setOverviewCheck] = React.useState(searchParams.has('overview') ? searchParams.get('overview') : false)
    const [startFiltering, setStartFiltering] = React.useState(false);


    const dispatch = useDispatch()
    const reservItems = useSelector(state => state.search.reservItems)
    const brandsInput = React.useRef([]);

    React.useEffect(() => {

        const filterArray = reservItems.filter((item) => {
            let filteringItems = true;

            if (searchParams.has('price'))  filteringItems = filteringItems && item.price >= priceQuery[0] && item.price <= priceQuery[1];
            
            if (searchParams.has('raiting')) filteringItems = filteringItems && item.raiting > 4;
            
            if (searchParams.has('overview')) filteringItems = filteringItems && item.overview.length;
            
            if (searchParams.has('brands')) {
                brandsInput.current.map((item) => {
                    if (brandsQuery.includes(item.name)) return item.checked = true
                })

                filteringItems = filteringItems && brandsQuery.includes(item.brand)
            }
            return filteringItems;
        })


        dispatch(SET_SEARCH_PRODUCTS(filterArray))
    }, [startFiltering, reservItems])

    const handleSubmit = (e) => {
        e.preventDefault()

        const brandQuery = brandsQuery.join(' ')
        let priceQuerys = priceQuery.join(' ')

        const params = {}
        if (priceQuerys === " ") priceQuerys = []
        if (priceQuerys.length) params.price = priceQuerys
        if (raitingCheck) params.raiting = true
        if (overviewCheck) params.overview = true
        if (brandQuery.length) params.brands = brandQuery
  
        setSearchParams(params);
        setStartFiltering(!startFiltering)

    }

    return (
        <div className="main__sidebar">
            <form onSubmit={handleSubmit}>
                <InputChecked inputs={[
                    {
                        value: 'Рейтинг выше 4',
                        name: 'raiting',
                        checked: raitingCheck,
                        func: setRaitingCheck,
                        type: 'checkbox'
                    },
                    {
                        value: 'Есть обзор',
                        name: 'overview',
                        checked: overviewCheck,
                        func: setOverviewCheck,
                        type: 'checkbox'
                    }
                ]} />
                <PriceFilter priceQuery={priceQuery} setPriceQuery={setPriceQuery} />
                <BrandsFilter reservItems={reservItems} brandsInput={brandsInput} brandsQuery={brandsQuery} setBrandsQuery={setBrandsQuery} />
                <BtnPanel setStartFiltering={setStartFiltering} brandsInput={brandsInput} setRaitingCheck={setRaitingCheck} setSearchParams={setSearchParams} setOverviewCheck={setOverviewCheck} startFiltering={startFiltering}/>
            </form>


        </div>
    )
}

export default FilteringPanel
