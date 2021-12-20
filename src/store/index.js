import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import productsReducer from './reducers/productsReducer'
import categoryReducer from './reducers/categoryReducer'
import searchReducer from './reducers/searchReducer'
const rootReducer = combineReducers({
     prdoucts: productsReducer,
     category: categoryReducer,
     search: searchReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store