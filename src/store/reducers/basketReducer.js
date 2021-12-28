const initialState = {
    basketItems: [],
    baksetIsActive: false
}

const basketReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_BASKET_PRDOUCT':
            return { ...state, basketItems: [...state.basketItems, action.payload] }

        case 'TOGGLE_BASKET':
            return { ...state, baksetIsActive: state.baksetIsActive = action.payload }
        case 'REMOVE_BASKET_PRODUCT':
            return { ...state, basketItems: state.basketItems = action.payload }
        case 'PLUS_SIZE':
            return {
                ...state, basketItems: state.basketItems = state.basketItems.map(card => {
                    if (card.id === action.payload) {
                        card.size++
                        card.price = card.price * 2
                    }
                    return card
                })
            }
            case 'MINUS_SIZE':
            return {
                ...state, basketItems: state.basketItems = state.basketItems.map(card => {
                    if (card.id === action.payload) {
                        card.price = card.price / 2
                        card.size--
                    }
                    return card
                })
            }
        default:
            return state
    }
}

export default basketReducer