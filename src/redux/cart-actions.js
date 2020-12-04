import { toast } from "react-toastify";
import { CartActionTypes } from "./cart-types.js";

export const AddItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => {
  toast.warn(`❎ ${item.name} deleted.`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const removeItem = (item) => {
  if (item.quantity === 1) {
    toast.warn(`❎ ${item.name} deleted.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

export const reloadCart = () => ({
  type: CartActionTypes.RELOAD_CART,
});
