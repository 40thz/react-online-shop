import React from 'react'
import SearchedItem from './SearchedItem'
import HeaderBtn from '../HeaderBtn'
import { useSelector, useDispatch } from 'react-redux'
import { SET_RESERV, SET_SEARCH_PRODUCTS } from '../../store/actions'
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

    const filterItems = (e) => {
        setValue(e.target.value)

        if (e.target.value.length) {
            setActive(true)
            const filtering = products.filter((item) => {
                return item.name.toLowerCase().includes(e.target.value.toLowerCase());
            })
            dispatch(SET_SEARCH_PRODUCTS(filtering))
            dispatch(SET_RESERV(filtering))
        } else {
            setActive(false)
            return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value) {
            navigate(`/search/${value}`)
            setActive(false)
        } else {
            return
        }
    }

    return (
        <form onSubmit={handleSubmit} className="header__panel__search">
            <div className="header__panel__search__input">
                <input onChange={(e) => filterItems(e)} type="text" placeholder="Поиск товаров" />
            </div>
            <div className="header__panel__search__btn">
            <div onClick={() => navigate(value ? `/search/${value}` : false)} className="header__panel__search__btn">
            <img src='/search icon.jpg' alt="btn" />
            <input type="submit" value="" />
        </div>
            </div>
            {active &&
                <div ref={ref} className='searchpopup__container'>
                    <SearchedItem clearSeacrh={clearSeacrh} />
                </div>
            }
        </form>
    )
}

export default Search
