import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import productsReducer from './reducers/productsReducer'
import categoryReducer from './reducers/categoryReducer'
const rootReducer = combineReducers({
     prdoucts: productsReducer,
     category: categoryReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store