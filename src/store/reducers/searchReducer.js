const initialState = {
    items: [],
}

const searchReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_SEARCH_PRODUCTS':
            return { ...state, items: state.items = action.payload }
        default:

            return state
    }
}

export default searchReducer