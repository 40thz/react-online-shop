import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TOGGLE_FAVOURITE, REMOVE_FAVOURITE_PRODUCT } from '../../store/actions'
import HeaderBtn from '../HeaderBtn'
import FavouriteCard from './FavouriteCard'

const Favourite = () => {
    const dispatch = useDispatch()
    const favouriteIsActive = useSelector(state => state.favourites.favouriteIsActive)
    const favouriteArray = useSelector(state => state.favourites.favouriteItems)
    const favouriteContainer = React.useRef()

    React.useEffect(() => {
        const handleClick = (e) => {
            if (favouriteContainer.current) if (!e.path.includes(favouriteContainer.current)) dispatch(TOGGLE_FAVOURITE(false))
        }

        document.body.addEventListener('click', handleClick)
        return document.body.addEventListener('click', handleClick)
    }, [favouriteArray])
    const clear = () => {
        dispatch(REMOVE_FAVOURITE_PRODUCT([]))
    }
    return (
        <div ref={favouriteContainer} className='basket__container'>
            <div onClick={() => dispatch(TOGGLE_FAVOURITE(!favouriteIsActive))}>
                <HeaderBtn
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18.34" viewBox="0 0 20 18.34"><defs><style> .cls-1 fill: gray;fillRule: evenodd; </style></defs> <path id="wishlist_icon" data-name="wishlist icon" className="cls-1" d="M1398.1,2157.55l-0.1.1-0.1-.1c-4.76-4.31-7.9-7.16-7.9-10.05a3.418,3.418,0,0,1,3.5-3.5,3.909,3.909,0,0,1,3.57,2.36h1.87a3.885,3.885,0,0,1,3.56-2.36,3.418,3.418,0,0,1,3.5,3.5C1406,2150.39,1402.86,2153.24,1398.1,2157.55Zm4.4-15.55a5.889,5.889,0,0,1-9,0,5.447,5.447,0,0,0-5.5,5.5c0,3.78,3.4,6.86,8.55,11.54l1.45,1.31,1.45-1.32c5.15-4.67,8.55-7.75,8.55-11.53A5.447,5.447,0,0,0,1402.5,2142Z" transform="translate(-1388 -2142)" /></svg>}
                    name={'Избранное'}
                    isExist={false}
                />
            </div>

            {
                favouriteIsActive &&
                <div className="basket">
                    <div className="basket--header">
                        <div className="basket--header-title">
                            Избранное
                        </div>
                        <div onClick={() => clear()} className="basket--header-clearBasket">
                            Очистить список
                        </div>
                    </div>
                    <div className="basket--content">
                        <FavouriteCard />
                    </div>
                </div>
            }


        </div>
    )
}

export default Favourite
