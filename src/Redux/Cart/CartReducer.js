import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./CartTypes";

let initialState = {
  products: [],
  total: 0,
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        products: [...state.products, action.payload],
        total: state.total + 1,
      };
    case REMOVE_FROM_CART:
      if (state.products.indexOf(action.payload) > -1) {
        state.products.splice(state.products.indexOf(action.payload), 1);
        state.total = state.total - 1;
      }
      return {
        products: state.products,
        total: state.total,
      };
    case CLEAR_CART:
      return {
        products: [],
        total: 0,
      };
    default:
      return state;
  }
}
