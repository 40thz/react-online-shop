import React, { Fragment } from 'react'

const List = () => {
    return (
        <Fragment>
            {
                items.map((item) => (
                    <Link to={item.route}>
                        <li>
                            <p>
                                <span>{item.name}</span>
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                width="6px" height="10px">
                                <path fillRule="evenodd" fill="rgb(181, 181, 181)"
                                    d="M6.001,5.002 L3.000,0.000 L0.125,0.000 L3.143,5.002 L-0.001,10.000 L3.000,10.000 L6.001,5.002 Z" />
                            </svg>
                        </li>
                    </Link>
                ))
            }
        </Fragment>
    )
}

export default List
