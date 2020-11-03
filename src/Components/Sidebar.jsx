import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ items, onClick, filterCategory }) {
    return (
        
        <div className="main__sidebar">
            <nav>
                {
                    
                    items.map((item, i) => (
                        
                         <li onClick={() => item.tab ? onClick(item.tab) : filterCategory(item.category)} key={i} ><Link to="#">
                           { item.name}
                        </Link></li>
                    ))
                }
            </nav>
        </div>
    )
}

export default Sidebar
