import React from 'react'
import { useSelector } from 'react-redux'

const Specs = () => {
    const specifications = useSelector(state => state.prdoucts.currentItem[0].specification.more)
    console.log(specifications)
    return (
        <div>
            <div className="product-characteristics__spec">
                {specifications.map((spec, i) => (
                    <div key={i} className="product-characteristics__spec-value">
                        {spec}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Specs
