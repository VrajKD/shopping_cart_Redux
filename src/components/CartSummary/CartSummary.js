import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCart,
  selectCartDiscount,
  selectCartItemsCount,
  selectCartTotal,
  selectCartTypeDiscount,
} from "../../redux/cart-selectors";

import {
  CartSummaryDiscount,
  CartSummaryTitle,
  CartSummaryContainer,
  CartSummaryTotal,
  CartSummaryNet,
  CartSummaryNumbers,
  CartReloadButton,
  RightContainer,
} from "./CartSummary-styled";
import { reloadCart } from "../../redux/cart-actions";
class CartSummary extends Component {
  render() {
    const { count, total, discount, typeDiscount, reloadCart } = this.props;
    return (
      <RightContainer>
        <CartSummaryContainer>
          <div>
            <CartSummaryTitle>
              <strong>Total :</strong>
            </CartSummaryTitle>
            <div>
              <CartSummaryTotal>
                Items ({count}) :{" "}
                <CartSummaryNumbers>${total}</CartSummaryNumbers>
              </CartSummaryTotal>
              <CartSummaryDiscount>
                Discount :{" "}
                <CartSummaryNumbers>- ${discount}</CartSummaryNumbers>
              </CartSummaryDiscount>
              {typeDiscount !== 0 && (
                <CartSummaryDiscount>
                  Type Discount :{" "}
                  <CartSummaryNumbers>- ${typeDiscount}</CartSummaryNumbers>
                </CartSummaryDiscount>
              )}
              <CartSummaryNet>
                Amount :{" "}
                <CartSummaryNumbers>
                  ${total - discount - typeDiscount}
                </CartSummaryNumbers>
              </CartSummaryNet>
            </div>
          </div>
        </CartSummaryContainer>
        {count === 0 && (
          <CartReloadButton onClick={reloadCart}>Reload Cart</CartReloadButton>
        )}
      </RightContainer>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCart,
  total: selectCartTotal,
  discount: selectCartDiscount,
  typeDiscount: selectCartTypeDiscount,
  count: selectCartItemsCount,
});

const mapDispatchToProps = {
  reloadCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
