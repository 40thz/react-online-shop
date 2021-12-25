import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBtn = ({ icon, value }) => {


    return (
        <Link to={value ? `/search/${value}` : ''}>
            <div className="header__search--btn">
                <img src={icon} alt="btn" />
            </div>
        </Link>
    )
}

export default HeaderBtn
