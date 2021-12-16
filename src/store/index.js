import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import productsReducer from './reducers/productsReducer'
const rootReducer = combineReducers({
     prdoucts: productsReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store