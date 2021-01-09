import { ADD_TO_WISHLIST } from '../actions/actiontype'
import { ADD_TO_CART } from '../actions/actiontype'

const initialState = {
    wishlist: [],
    wishlistCount: 0,
    itemsInCart: [],
    totalItemsInCart: 0,
    products: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: 
            return {...state, wishlistCount : state.wishlistCount + 1} 
        case ADD_TO_CART: 
            return {...state, totalItemsInCart: state.totalItemsInCart + 1}
        default:
            return state
    }
}

export default mainReducer