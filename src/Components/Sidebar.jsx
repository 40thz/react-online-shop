import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { SET_CURRENT_CATEGORY } from '../store/actions'

const Sidebar = ({ items, setCurrentTab }) => {
    const dispatch = useDispatch()

    const redirect = (obj) => {
        if (obj.type) {
            return '/'
        } else if (obj.to) {
            return `#${obj.to}`
        } else if (obj.route) {
            return `${obj.route}`
        }
        else {
            return `/category/${obj.category} `
        }
    }

    return (

        <nav className="main__content__sidebar__navigation">
            {
                items.map((item, i) => (
                    <HashLink smooth key={i} to={redirect(item)}>
                        <li onClick={() => item.type ? dispatch(SET_CURRENT_CATEGORY()) : ''}>
                            <p>
                                <div className="logo__list">
                                    <img src={item.icon} alt="" className="icon-nav" />
                                </div>
                                <span>  {item.name}</span>
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                width="6px" height="10px">
                                <path fillRule="evenodd" fill="rgb(181, 181, 181)"
                                    d="M6.001,5.002 L3.000,0.000 L0.125,0.000 L3.143,5.002 L-0.001,10.000 L3.000,10.000 L6.001,5.002 Z" />
                            </svg>
                        </li>
                    </HashLink>
                ))

            }
        </nav >

    )
}

export default Sidebar
