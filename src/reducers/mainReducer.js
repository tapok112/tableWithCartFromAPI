export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const QTY_CHANGE = 'QTY_CHANGE';
export const SET_DATA = 'SET_DATA'

export const initialState = {
    cart: [],
    data: []
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
        
        default:
            return state;
    }
}

export default mainReducer;