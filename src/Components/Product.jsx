import React, { Fragment } from 'react'
import Buying from './Buying'
import Sidebar from './Sidebar'
import Slider from './Slider'

const Product = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="main__product">
                    <div className="main__product--by">
                        <Slider />
                        <Buying />
                    </div>
                    <div className="main__product--spec">
                        <div className="main__product--more">
                            <Sidebar items={
                                [
                                    {
                                        name: 'Описание',
                                    },
                                    {
                                        name: 'Характеристики',
                                    },
                                    {
                                        name: 'Обзоры',
                                    },
                                    {
                                        name: 'Отзывы',
                                    }
                                ]

                            } />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Product
