import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_CURRENT_TAB, SET_CURRENT_CATEGORY } from '../store/actions'

const Sidebar = ({ items }) => {
    const dispatch = useDispatch()

    const redirect = (obj) => {
        if(obj.type){
            return '/'
        }else if(obj.tab){
            return ""
        } else{
            return `/category/${obj.category} `
        }
    }

    return (
        <div className="main__sidebar">
            <nav>
                {
                    items.map((item, i) => (
                        <Link key={i} to={redirect(item)}>
                            <li onClick={() => item.type ? dispatch(SET_CURRENT_CATEGORY()) : dispatch(SET_CURRENT_TAB(item.tab))} >
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
