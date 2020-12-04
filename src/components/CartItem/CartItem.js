import React from "react";
import {
  CartImage,
  CartImageContainer,
  CartItemContainer,
  CartItemRemove,
  CartItemText,
  CartItemPrice,
  CartQuantityArrow,
  CartQuantityContainer,
  CartQuantityValue,
} from "./CartItem-styled";

import { connect } from "react-redux";
import { clearItem, AddItem, removeItem } from "../../redux/cart-actions";

class CartItem extends React.Component {
  render() {
    const { cartItem, clearItem, AddItem, removeItem } = this.props;
    return (
      <CartItemContainer>
        <CartImageContainer>
          <CartImage src={cartItem.img_url} alt="item" />
        </CartImageContainer>
        <CartItemText>{cartItem.name}</CartItemText>
        <CartItemRemove onClick={() => clearItem(cartItem)}>
          &#10005;
        </CartItemRemove>
        <CartQuantityContainer>
          <CartQuantityArrow onClick={() => removeItem(cartItem)}>
            &minus;
          </CartQuantityArrow>
          <CartQuantityValue>{cartItem.quantity}</CartQuantityValue>
          <CartQuantityArrow onClick={() => AddItem(cartItem)}>
            &#x2b;
          </CartQuantityArrow>
        </CartQuantityContainer>
        <CartItemPrice>$ {cartItem.price * cartItem.quantity}</CartItemPrice>
      </CartItemContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  AddItem: (item) => dispatch(AddItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
