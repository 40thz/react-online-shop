import React from 'react'

const Sidebar = ({ items }) => {
    return (
        <div className="main__sidebar">
            <nav>
                {
                    items.map((item, i) => (
                        <li key={i} >
                            {item.name}
                        </li>
                    ))
                }
            </nav>
        </div>
    )
}

export default Sidebar
