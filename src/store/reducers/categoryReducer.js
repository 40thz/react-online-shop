const initialState = {
    categories: [],
    currentCategory: 0
}

const categoryReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_CATEGORIES':
            return { ...state, categories: state.categories = action.payload }
        case 'SET_CURRENT_CATEGORY':
            return { ...state, currentCategory: state.currentCategory = action.payload }
        default:

            return state
    }
}

export default categoryReducer