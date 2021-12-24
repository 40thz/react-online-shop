const initialState = {
    items: [],
    reservItems: [],
}

const searchReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_SEARCH_PRODUCTS':
            return { ...state, items: state.items = action.payload }
        case 'SET_RESERV':
            return { ...state, reservItems: state.reservItems = action.payload }
        default:

            return state
    }
}

export default searchReducer