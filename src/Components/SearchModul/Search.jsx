import React from 'react'
import SearchedItem from './SearchedItem'
import HeaderBtn from '../HeaderBtn'
import { useSelector, useDispatch } from 'react-redux'
import { SET_SEARCH_PRODUCTS } from '../../store/actions'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.prdoucts.items)
    const [value, setValue] = React.useState(String)
    const [active, setActive] = React.useState(false)
    const ref = React.useRef();
    const navigate = useNavigate()

    const clearSeacrh = () => {
        setActive(false)
    }

    React.useEffect(() => {
        const handleClick = (e) => {
            if (!e.path.includes(ref.current)) {
                clearSeacrh()
            }
        }
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [])

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${value}`)
            clearSeacrh()
        }
    }

    const filterItems = (e) => {
        setValue(e.target.value)
        setActive(true)
        const filtering = products.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value.toLowerCase());
        })

        dispatch(SET_SEARCH_PRODUCTS(filtering))
    }

    return (
        <div className="header__search">
            <div className="header__search--input">
                <input onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => filterItems(e)} type="text" />
                <HeaderBtn value={value} icon={`/search-svgrepo-com.svg`} />
            </div>
            {active &&
                <div ref={ref} className='searchpopup__container'>
                    <SearchedItem clearSeacrh={clearSeacrh} />
                </div>
            }
        </div>
    )
}

export default Search
