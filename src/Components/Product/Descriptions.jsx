import React from 'react'

const Descriptions = ({ currentItem }) => {
    return (
        <div className="main__product--more" id="description">
            <div className="spec_name">
               Описание товара
            </div>
            {currentItem.description}
        </div>
    )
}

export default Descriptions
