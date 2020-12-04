import { createSelector } from "reselect";

export const selectCart = (state) => state.cartItems;

export const selectCartItemsCount = createSelector([selectCart], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCart], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartDiscount = createSelector([selectCart], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.discount,
    0
  )
);

export const selectCartTypeDiscount = createSelector(
  [selectCart],
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItem) =>
        cartItem.type === "fiction"
          ? acc + cartItem.quantity * cartItem.price * 0.15
          : acc,
      0
    )
);
