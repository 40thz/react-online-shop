export const SET_PRODUCTS = (array) => ({
    type: 'SET_PRODUCTS',
    payload: array
})

export const SET_CURRENT_ITEM = (obj) => ({
    type: 'SET_CURRENT_ITEM',
    payload: obj
})

export const SET_CURRENT_TAB = (any) => ({
    type: 'SET_CURRENT_TAB',
    payload: any
})

export const FITER_ITEMS = (arr) => ({
    type: 'FITER_ITEMS',
    payload: arr
})

export const SET_CATEGORIES = (arr) => ({
    type: 'SET_CATEGORIES',
    payload: arr
})

export const SET_CURRENT_CATEGORY = (number) => ({
    type: 'SET_CURRENT_CATEGORY',
    payload: number
})

export const FITER_ITEMS_REMOVE = (number) => ({
    type: 'FITER_ITEMS_REMOVE',
    payload: number
})

export const SET_SEARCH_PRODUCTS = (arr) => ({
    type: 'SET_SEARCH_PRODUCTS',
    payload: arr
})
export const SET_RESERV = (arr) => ({
    type: 'SET_RESERV',
    payload: arr
})

export const SET_BASKET_PRDOUCT = (arr) => ({
    type: 'SET_BASKET_PRDOUCT',
    payload: arr
})

export const TOGGLE_BASKET = (boolean) => ({
    type: 'TOGGLE_BASKET',
    payload: boolean
})

export const REMOVE_BASKET_PRODUCT = (arr) => ({
    type: 'REMOVE_BASKET_PRODUCT',
    payload: arr
})

export const PLUS_SIZE = (str) => ({
    type: 'PLUS_SIZE',
    payload: str
})

export const MINUS_SIZE = (str) => ({
    type: 'MINUS_SIZE',
    payload: str
})

export const SET_FAVOURITE_PRDOUCT = (obj) => ({
    type: 'SET_FAVOURITE_PRDOUCT',
    payload: obj
})

export const REMOVE_FAVOURITE_PRODUCT = (arr) => ({
    type: 'REMOVE_FAVOURITE_PRODUCT',
    payload: arr
})

export const TOGGLE_FAVOURITE = (boolean) => ({
    type: 'TOGGLE_FAVOURITE',
    payload: boolean
})

export const DB_REFRESH = (boolean) => ({
    type: 'DB_REFRESH',
    payload: boolean
})