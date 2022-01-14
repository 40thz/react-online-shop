import React, { Fragment } from 'react'
import Buying from './Buying'
import Sidebar from '../Sidebar'
import Slider from './Slider'
import { useSelector, useDispatch } from 'react-redux'
import { SET_CURRENT_ITEM, SET_COMMENT } from '../../store/actions'
import { useParams } from "react-router-dom";
import Specs from './Specs'
import Overview from './Overview'
import Header from '../Header'
import Descriptions from './Descriptions'
import Comments from './Comments'
import { getDatabase, ref, get, query, equalTo, orderByChild } from "firebase/database";

const Product = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.prdoucts.items)
    const currentItem = useSelector(state => state.prdoucts.currentItem[0])

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

    React.useEffect(() => {
        const db = getDatabase();
        const que = query(ref(db, 'comments'), orderByChild("id"), equalTo(parseInt(params.id)))
        get(que)
            .then((snapshot) => {
                let list = []
                snapshot.forEach(item => {
                    list.push(item.val())
                })
                dispatch(SET_COMMENT(list))
            })
    }, [params])

    return (
        <Fragment>
            <Header />
            <div className="container">
                {currentItem ?

                    <div className="main__product">
                        <div className="main__product--by">
                            <Slider currentItem={currentItem} />
                            <Buying currentItem={currentItem} />
                        </div>
                        <div className="container">
                            <div className="main__content">
                                <div className="main__content__sidebar">
                                    <Sidebar items={
                                        [
                                            {
                                                name: 'Описание',
                                                to: 'description'
                                            },
                                            {
                                                name: 'Характеристики',
                                                to: 'specification'
                                            },
                                            {
                                                name: 'Обзоры',
                                                to: 'overview'
                                            },
                                            {
                                                name: 'Отзывы',
                                                to: 'comments'
                                            }
                                        ]

                                    } />
                                </div>
                                <div className="main__content__catalog">
                                    <Descriptions currentItem={currentItem} />
                                    <Specs />
                                    <Overview />
                                    <Comments />
                                </div>
                            </div>
                        </div>

                    </div>
                    : 'LOAD'}
            </div>
        </Fragment>
    )
}

export default Product