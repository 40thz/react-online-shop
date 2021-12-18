const initialState = {
    items: false,
    filterItems: [],
    currentItem: {},
    currentItemTab: false
}

const productsReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_PRODUCTS':
            return { ...state, items: state.items = action.payload }
        case 'SET_CURRENT_ITEM':
            return { ...state, currentItem: state.currentItem = action.payload.products.filter((item) => item.id === action.payload.currentId) }
        case 'SET_CURRENT_TAB':
            return { ...state, currentItemTab: state.currentItemTab = action.payload }
        default:

            return state
    }
}

export default productsReducer