import React, { Fragment } from 'react'
import Specific from './Specific'
import Slider from './Slider'
import Sidebar from './Sidebar';
import Buying from './Buying';




const Product = ({ productId, productFunc, items }) => {

    let selectedProduct = false;
    let currentId = window.location.pathname.substr(9);
    const [activeTab, setActiveTab] = React.useState(false)
    
    if (items) {
        let sortProduct = items.find(item => item.id === productId)
        selectedProduct = sortProduct
    }

    if (productId === 0) {
        productFunc(parseInt(currentId))
    }

    React.useEffect(() => {
        document.title = `Купить ${selectedProduct.name}`;
    });
    return (

        <Fragment>
            {
                selectedProduct ?
                    <div className="main__product">

                        <div className="main__product--by">
                            <Slider selectedProduct={selectedProduct} />
                            <Buying selectedProduct={selectedProduct} />
                        </div>
                        <div className="main__product--spec">
                            <Sidebar onClick={setActiveTab} items={
                                [
                                    {
                                        name: 'Описание',
                                        tab: selectedProduct.description,

                                    },
                                    {
                                        name: 'Характеристики',
                                        tab: <Specific selectedProduct={selectedProduct} />,
                                    },
                                    {
                                        name: 'Обзоры',
                                        tab: 'В разработке',
                                    },
                                    {
                                        name: 'Отзывы',
                                        tab: 'В разработке',
                                    }
                                ]

                            } />

                            <div className="main__product--more">
                                {activeTab ? activeTab : setActiveTab(selectedProduct.description)}
                            </div>
                        </div>
                    </div>
                    : <span>Loading</span>
            }
        </Fragment>
    )
}

export default Product
