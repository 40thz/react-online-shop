import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { SET_CURRENT_CATEGORY, SET_CURRENT_TAB, SET_BASKET_PRDOUCT, REMOVE_BASKET_PRODUCT, SET_FAVOURITE_PRDOUCT, REMOVE_FAVOURITE_PRODUCT } from '../store/actions'
import {addIn} from './addIn'
const Card = () => {

    const defaultIems = useSelector(state => state.prdoucts.items)
    const [products, setProducts] = React.useState(defaultIems)
    const basketArray = useSelector(state => state.basket.basketItems)
    const favouriteArray = useSelector(state => state.favourites.favouriteItems)
    const dispatch = useDispatch()
    const params = useParams();

    React.useEffect(() => {
        
        if (params.categoryId) {
            const filter = defaultIems.filter((item) => item.category === parseInt(params.categoryId))
            setProducts(filter)
            dispatch(SET_CURRENT_CATEGORY(parseInt(params.categoryId)))
        } else {
            dispatch(SET_CURRENT_CATEGORY(null))
            setProducts(defaultIems)
        }
        dispatch(SET_CURRENT_TAB())
    }, [params.categoryId])


    const removeProduct = (action, array, id) => {
        const filtering = array.filter((item) => item.id !== id);
        dispatch(action(filtering))
    }
    return (
        <Fragment>
            {
                products.map((item, i) => (
                    <div key={item.id} className="main__content__catalog__items__card">
                        <div className="main__content__catalog__items__card__header">
                            <div className="sale">
                                <span>Sale 10%</span>
                            </div>
                            <div className="favorites">
                                <svg onClick={() => favouriteArray.some(prod => prod.id === item.id) ? removeProduct(REMOVE_FAVOURITE_PRODUCT, favouriteArray, item.id) : addIn(item, favouriteArray, dispatch, SET_FAVOURITE_PRDOUCT)}
                                    xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                    width="20px" height="19px">
                                    <path fillRule="evenodd" fill={favouriteArray.some(prod => prod.id === item.id) ? "rgb(25, 113, 228)" : "rgb(216, 214, 214)"}
                                        d="M14.500,-0.000 C12.760,-0.000 11.089,0.810 9.999,2.090 C8.910,0.810 7.239,-0.000 5.498,-0.000 C2.420,-0.000 0.000,2.420 0.000,5.500 C0.000,9.280 3.401,12.360 8.549,17.040 L9.999,18.350 L11.449,17.030 C16.598,12.360 19.999,9.280 19.999,5.500 C19.999,2.420 17.579,-0.000 14.500,-0.000 L14.500,-0.000 L14.500,-0.000 ZM10.101,15.550 L9.999,15.650 L9.899,15.550 C5.140,11.240 2.000,8.390 2.000,5.500 C2.000,3.500 3.500,2.000 5.498,2.000 C7.039,2.000 8.539,2.990 9.070,4.360 L10.940,4.360 C11.458,2.990 12.958,2.000 14.500,2.000 C16.501,2.000 18.000,3.500 18.000,5.500 C18.000,8.390 14.858,11.240 10.101,15.550 L10.101,15.550 L10.101,15.550 Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="main__content__catalog__items__card__center">
                            <Link to={`/product/${item.id}`} >
                                <div className="main__content__catalog__items__card__image">
                                    <img src={item.logo} alt="image" />
                                </div>
                            </Link>
                        </div>
                        <div className="main__content__catalog__items__card__footer">
                            <div className="main__content__catalog__items__card__title">
                                {item.name}
                            </div>

                            <div className="main__content__catalog__items__card__price">
                                <span>{item.price} ₽</span>
                                <div onClick={() => basketArray.some(prod => prod.id === item.id) ? removeProduct(REMOVE_BASKET_PRODUCT, basketArray, item.id) : addIn(item, basketArray, dispatch, SET_BASKET_PRDOUCT)} className="btn-item-huy">
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                        width="20px" height="20px">
                                        <path fillRule="evenodd" fill={basketArray.some(prod => prod.id === item.id) ? "rgb(25, 113, 228)" : "rgb(216, 214, 214)"}
                                            d="M6.000,16.000 C4.900,16.000 4.010,16.900 4.010,18.000 C4.010,19.100 4.900,20.000 6.000,20.000 C7.099,20.000 7.999,19.100 7.999,18.000 C7.999,16.900 7.099,16.000 6.000,16.000 L6.000,16.000 L6.000,16.000 ZM-0.001,0.000 L-0.001,2.000 L2.001,2.000 L5.600,9.590 L4.249,12.040 C4.089,12.320 4.000,12.650 4.000,13.000 C4.000,14.100 4.900,15.000 6.000,15.000 L17.998,15.000 L17.998,13.000 L6.420,13.000 C6.279,13.000 6.170,12.890 6.170,12.750 L6.199,12.630 L7.099,11.000 L14.549,11.000 C15.301,11.000 15.960,10.590 16.299,9.970 L19.878,3.480 C19.959,3.340 19.998,3.170 19.998,3.000 C19.998,2.450 19.550,2.000 19.001,2.000 L4.209,2.000 L3.270,0.000 L-0.001,0.000 L-0.001,0.000 L-0.001,0.000 ZM16.000,16.000 C14.900,16.000 14.011,16.900 14.011,18.000 C14.011,19.100 14.900,20.000 16.000,20.000 C17.100,20.000 17.998,19.100 17.998,18.000 C17.998,16.900 17.100,16.000 16.000,16.000 L16.000,16.000 L16.000,16.000 Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment >
    )
}

export default Card
