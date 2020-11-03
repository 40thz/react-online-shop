import React  from 'react'
import { Redirect } from 'react-router-dom'
function NotFound() {

    let url = window.location.pathname;
    return (
        <div>
            {url.includes('/product/') ? true : <Redirect to='/catalog' />}
        </div>
    )
}

export default NotFound
