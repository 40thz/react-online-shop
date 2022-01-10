import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const HeaderCarousel = () => {
    return (
        <section id="store-carousel">
            <div className="container">
                <div className="header__carousel">
                    <Carousel showThumbs={false} selectedItem={0}>
                        <div>
                            <img src="/slider.jpg" />
                            <div className="header__carousel__item">
                                <div className="header__carousel__item__title">Вселенная глазами ребенка</div>
                                <div className="header__carousel__item__text">Начать покупки</div>
                            </div>
                        </div>
                        <div>
                            <img src="/slider.jpg" />
                            <div className="header__carousel__item">
                                <div className="header__carousel__item__title">Вселенная глазами ребенка</div>
                                <div className="header__carousel__item__text">Начать покупки</div>
                            </div>
                        </div>
                        <div>
                            <img src="/slider.jpg" />
                            <div className="header__carousel__item">
                                <div className="header__carousel__item__title">Вселенная глазами ребенка</div>
                                <div className="header__carousel__item__text">Начать покупки</div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>

    )
}

export default HeaderCarousel
