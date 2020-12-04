import { CartActionTypes } from "./cart-types";
import { CART_DATA } from "../CART_DATA";
import { addCartItem, removeCheckoutItem } from "./cart-utils";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const INITIAL_STATE = {
  cartItems: CART_DATA,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCheckoutItem(state.cartItems, action.payload),
      };
    case CartActionTypes.RELOAD_CART:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
