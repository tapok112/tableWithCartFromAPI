export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const QTY_CHANGE = 'QTY_CHANGE';
export const SET_DATA = 'SET_DATA';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const FETCH_DATA = 'FETCH_DATA';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const PUSH_TO_CART = 'PUSH_TO_CART';

export const initialState = {
    cart: [],
    data: [],
    isLoading: false
}
const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                cart: [...state.cart, action.payload] 
            }
        
        case QTY_CHANGE:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            qty: action.payload.qty
                        }                
                    } return item;                      
                    
                })
            }

        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }

        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        
        default:
            return state;
    }
}

export default mainReducer;