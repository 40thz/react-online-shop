import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { SET_BASKET_PRDOUCT, SET_FAVOURITE_PRDOUCT, REMOVE_FAVOURITE_PRODUCT, REMOVE_BASKET_PRODUCT } from '../../store/actions'
import { addIn } from '../addIn'


function Buying({ currentItem }) {
    const navigate = useNavigate()
    const basketArray = useSelector(state => state.basket.basketItems)
    const favouriteArray = useSelector(state => state.favourites.favouriteItems)
    const dispatch = useDispatch()

    const removeProduct = (action, array, id) => {
        const filtering = array.filter((item) => item.id !== id);
        dispatch(action(filtering))
    }
    return (
        <div className="main__product--buying">

            <div className='main__product--buying-container'>
                <div className="main__product--buying-price">
                    {currentItem.price} руб.
                </div>
                <div className="main__product--buying-container">
                    <div className="main__product--buying-btns">
                        <div onClick={() => favouriteArray.some(prod => prod.id === currentItem.id) ? removeProduct(REMOVE_FAVOURITE_PRODUCT, favouriteArray, currentItem.id) : addIn(currentItem, favouriteArray, dispatch, SET_FAVOURITE_PRDOUCT)} className="main__product--buying-btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                width="20px" height="19px">
                                <path fillRule="evenodd" fill={favouriteArray.some(prod => prod.id === currentItem.id) ? "rgb(25, 113, 228)" : "rgb(216, 214, 214)"}
                                    d="M14.500,-0.000 C12.760,-0.000 11.089,0.810 9.999,2.090 C8.910,0.810 7.239,-0.000 5.498,-0.000 C2.420,-0.000 0.000,2.420 0.000,5.500 C0.000,9.280 3.401,12.360 8.549,17.040 L9.999,18.350 L11.449,17.030 C16.598,12.360 19.999,9.280 19.999,5.500 C19.999,2.420 17.579,-0.000 14.500,-0.000 L14.500,-0.000 L14.500,-0.000 ZM10.101,15.550 L9.999,15.650 L9.899,15.550 C5.140,11.240 2.000,8.390 2.000,5.500 C2.000,3.500 3.500,2.000 5.498,2.000 C7.039,2.000 8.539,2.990 9.070,4.360 L10.940,4.360 C11.458,2.990 12.958,2.000 14.500,2.000 C16.501,2.000 18.000,3.500 18.000,5.500 C18.000,8.390 14.858,11.240 10.101,15.550 L10.101,15.550 L10.101,15.550 Z" />
                            </svg>
                        </div>
                        <div onClick={() => basketArray.some(prod => prod.id === currentItem.id) ? removeProduct(REMOVE_BASKET_PRODUCT, basketArray, currentItem.id) : addIn(currentItem, basketArray, dispatch, SET_BASKET_PRDOUCT)} className="main__product--buying-btn">
                            {basketArray.some(prod => prod.id === currentItem.id) ? <span style={{color: "#1875f0"}}>Товар в корзине</span> : "Купить"}
                        </div>
                    </div>
                    <div className="main__product--buying-btn-back">
                        <div className="main__product--buying-btn" onClick={() => navigate(-1)}>
                            Назад
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buying
