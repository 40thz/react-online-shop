import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderBtn = ({ icon, value }) => {
const navigate = useNavigate();

    return (
            <div onClick={() => navigate(value ? `/search/${value}` : false)} className="header__search--btn">
                <img src={icon} alt="btn" />
            </div>
    )
}

export default HeaderBtn
