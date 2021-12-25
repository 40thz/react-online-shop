import React, { Fragment } from 'react'
import Buying from './Buying'
import Sidebar from '../Sidebar'
import Slider from './Slider'
import { useSelector, useDispatch } from 'react-redux'
import { SET_CURRENT_ITEM } from '../../store/actions'
import { useParams } from "react-router-dom";
import Specs from './Specs'
import Overview from './Overview'

const Product = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.prdoucts.items)
    const currentItem = useSelector(state => state.prdoucts.currentItem[0])
    const currentTab = useSelector(state => state.prdoucts.currentItemTab)
    const params = useParams();

    React.useEffect(() => {
        if (products) {
            const payload = {
                products: products,
                currentId: parseInt(params.id)
            }
            dispatch(SET_CURRENT_ITEM(payload))
        } else {
            return
        }
        if (currentItem) {
            document.title = currentItem.name
        }
    })


    return (
        <Fragment>
            <div className="container">
                {currentItem ?

                    <div className="main__product">
                        <div className="main__product--by">
                            <Slider currentItem={currentItem} />
                            <Buying currentItem={currentItem} />
                        </div>
                        <div className="main__product--spec">
                            <Sidebar items={
                                [
                                    {
                                        name: 'Описание',
                                        tab: currentItem.description
                                    },
                                    {
                                        name: 'Характеристики',
                                        tab: <Specs />
                                    },
                                    {
                                        name: 'Обзоры',
                                        tab: <Overview />
                                    },
                                    {
                                        name: 'Отзывы',
                                        tab: 'отзывы'
                                    }
                                ]

                            } />
                            <div className="main__product--more">
                                {currentTab ? currentTab : currentItem.description}
                            </div>
                        </div>
                    </div>
                    : 'LOAD'}
            </div>
        </Fragment>
    )
}

export default Product