import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import productsReducer from './reducers/productsReducer'
import categoryReducer from './reducers/categoryReducer'
import searchReducer from './reducers/searchReducer'
import basketReducer from './reducers/basketReducer'

const rootReducer = combineReducers({
     prdoucts: productsReducer,
     category: categoryReducer,
     search: searchReducer,
     basket: basketReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store