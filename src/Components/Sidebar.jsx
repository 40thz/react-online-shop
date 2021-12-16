import React from 'react'
import { useDispatch } from 'react-redux' 
import { SET_CURRENT_TAB } from '../store/actions'

const Sidebar = ({ items }) => {
    const dispatch = useDispatch()

    return (
        <div className="main__sidebar">
            <nav>
                {
                    items.map((item, i) => (
                        <li onClick={() => item.tab ? dispatch(SET_CURRENT_TAB(item.tab)) : 'loading'} key={i} >
                            {item.name}
                        </li>
                    ))
                }
            </nav>
        </div>
    )
}

export default Sidebar
