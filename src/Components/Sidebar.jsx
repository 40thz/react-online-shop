import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_CURRENT_TAB, FITER_ITEMS } from '../store/actions'

const Sidebar = ({ items, SetCategoryName }) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.prdoucts.items)

    const setCategory = (obj) => {
        const payload = {
            products: products,
            category: obj.category,
        }
        dispatch(FITER_ITEMS(payload))
        SetCategoryName(obj.name)
    }


    return (
        <div className="main__sidebar">
            <nav>
                {
                    items.map((item, i) => (
                        <Link  key={i} to={item.tab  ? '' : `/category/${item.category}`}>
                            <li onClick={() => item.tab ? dispatch(SET_CURRENT_TAB(item.tab)) : setCategory(item)} >
                                {item.name}
                            </li>
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}

export default Sidebar
