import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import productsReducer from './reducers/productsReducer'
import categoryReducer from './reducers/categoryReducer'
import searchReducer from './reducers/searchReducer'
import basketReducer from './reducers/basketReducer'
import favouritesReducer from './reducers/favouritesReducer'

const rootReducer = combineReducers({
     prdoucts: productsReducer,
     category: categoryReducer,
     search: searchReducer,
     basket: basketReducer,
     favourites: favouritesReducer,
})

const persistedState = localStorage.getItem('reduxState')
     ? JSON.parse(localStorage.getItem('reduxState'))
     : {}
const store = createStore(rootReducer , composeWithDevTools());

// store.subscribe(() => {
//      localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })
export default store

