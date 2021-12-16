import React from 'react'
import { useNavigate } from "react-router-dom";

function Buying() {
    let navigate = useNavigate()

    return (
        <div className="main__product--buying">
            <div className="main__product--buying-price">
                Цена: 1023
            </div>
            <div>
                <div className="main__product--buying-btn">
                    В корзину
            </div>
                <div onClick={() => navigate(-1)} className="main__product--buying-btn">
                    Назад
          </div>
            </div>
        </div>
    )
}

export default Buying
