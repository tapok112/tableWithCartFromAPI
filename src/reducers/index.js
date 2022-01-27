import { combineReducers} from 'redux';
import mainReducer, { SET_CART_ITEMS, QTY_CHANGE, SET_DATA } from './mainReducer';

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