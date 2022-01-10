const initialState = {
    items: false,
    filterItems: [],
    currentItem: {},
    dbRefresh: false,
}

const productsReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_PRODUCTS':
            return { ...state, items: state.items = action.payload }
        case 'SET_CURRENT_ITEM':
            return { ...state, currentItem: state.currentItem = action.payload.products.filter((item) => item.id === action.payload.currentId) }
        case 'DB_REFRESH':
            return { ...state, dbRefresh: state.dbRefresh = action.payload }
        default:

            return state
    }
}

export default productsReducer