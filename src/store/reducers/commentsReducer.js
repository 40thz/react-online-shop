const initialState = {
    comments: []
}

const commentsReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_COMMENT':
            return { ...state, comments: state.comments = action.payload }
        default:

            return state
    }
}

export default commentsReducer