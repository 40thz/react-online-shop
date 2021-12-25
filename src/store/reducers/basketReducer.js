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
        default:
            return state
    }
}

export default basketReducer