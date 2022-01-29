import { combineReducers} from 'redux';
import mainReducer, { SET_CART_ITEMS, QTY_CHANGE, SET_DATA, REMOVE_ITEM, FETCH_DATA, SET_IS_LOADING, PUSH_TO_CART } from './mainReducer';

export default combineReducers({
    main: mainReducer
})

export const setCart = (payload) => {
    return({type: SET_CART_ITEMS,
        payload: payload
    })
}
export const qtyChange = (payload) => {
    return({type: QTY_CHANGE, 
        payload: payload
    })
}
export const setData = (payload) => {
    return ({type: SET_DATA,
        payload: payload
    })
}
export const removeItem = (payload) => {
    return ({type: REMOVE_ITEM,
        payload: payload
    })
}
export const fetchData = () => {
    return ({type: FETCH_DATA
    })
}
export const pushToCart = () => {
    return ({type: PUSH_TO_CART
    })
}
export const setIsLoading = payload => ({type: SET_IS_LOADING, payload})