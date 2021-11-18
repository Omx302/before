import { combineReducers, createStore } from "redux";
import Cart from "./Cart/CartReducer";

// Combine reducers isn't really necessary when you only have one reducer.
// But it's good to have it in case you have multiple reducers.
// And 99.99% of all Redux apps will have more than one reducer.
let reducers = combineReducers({ Cart });

const store = () => {
  return createStore(reducers);
};

export default store();
