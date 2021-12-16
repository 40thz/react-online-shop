const initialState = {
    items: false
}
const productsReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_PRODUCTS':
            return { ...state, items: state.items = action.payload }

        default:

            return state
    }
}

export default productsReducer