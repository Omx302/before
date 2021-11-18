import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./CartTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
