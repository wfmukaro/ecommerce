import * as actionTypes from '../constants/cartConstants';
export const cartReducer = (state={cartItems:[]},action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item=action.payload;
            const existItem=state.cartItems.find((obj)=>obj.product===item.product);
            if (existItem) {
                return{
                    ...state,
                    cartItems:state.cartItems.map((obj)=>obj.product===existItem.product?item:obj)
                }
                
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item],

                }
            }
            
        case actionTypes.REMOVE_FROM_CART:
            return{
                    ...state,
                    cartItems:state.cartItems.filter((obj)=>obj.product !==action.payload),
                }           
        default:
            return state;
    }
}
