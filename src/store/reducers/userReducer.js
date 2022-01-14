const initialState = {
    isAuth: false,
    email: null,
    token: null,
    id: null,
}

const userReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                isAuth: true,
                email: state.email = action.payload.email,
                token: state.token = action.payload.token,
                id: state.id = action.payload.id
            }
        case 'REMOVE_USER':
            return {
                ...state,
                isAuth: false,
                email: null,
                token: null,
                id: null
            }
        default:

            return state
    }
}

export default userReducer