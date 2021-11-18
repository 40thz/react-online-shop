import React from 'react'
import { useHistory } from "react-router-dom";

function Buying({ selectedProduct }) {
    let history = useHistory()

    return (
        <div className="main__product--buying">
            <div className="main__product--buying-price">
                Цена: {selectedProduct.price}
            </div>
            <div>
                <div onClick={() => console.log(selectedProduct.id)} className="main__product--buying-btn">
                    В корзину
            </div>
                <div onClick={() => history.goBack()} className="main__product--buying-btn">
                    Назад
          </div>
            </div>
        </div>
    )
}

export default Buying
