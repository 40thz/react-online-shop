const initialState = {
    favouriteItems: [],
    favouriteIsActive: false
}

const favouritesReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_FAVOURITE_PRDOUCT':
            return { ...state, favouriteItems: [...state.favouriteItems, action.payload] }
        case 'REMOVE_FAVOURITE_PRODUCT':
            return { ...state, favouriteItems: state.favouriteItems = action.payload }
        case 'TOGGLE_FAVOURITE':
            return { ...state, favouriteIsActive: state.favouriteIsActive = action.payload }
        default:
            return state
    }
}

export default favouritesReducer