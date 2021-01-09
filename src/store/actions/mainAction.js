import  { ADD_TO_WISHLIST } from './actiontype'
import { ADD_TO_CART } from './actiontype'

export const updateWishlist = () => {

    return {
        type:  ADD_TO_WISHLIST,
        payload: {}   
    }
}

export const updateCart = () => {

    return {
        type: ADD_TO_CART,
        payload: {}
    }
}

