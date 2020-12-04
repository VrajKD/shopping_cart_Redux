import React from "react";
import {
  CartHeaderBlock,
  CartHeaderContainer,
  CartPageContainer,
  CartPageTitle,
  FlexContainer,
  ItemListContainer,
} from "./Cart-styled";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCart, selectCartItemsCount } from "../../redux/cart-selectors";
import CartItem from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";

class Cart extends React.Component {
  render() {
    const { cartItems, count } = this.props;
    return (
      <CartPageContainer>
        <CartPageTitle>&#706; Order Summary : </CartPageTitle>
        <FlexContainer>
          <ItemListContainer>
            <CartHeaderContainer>
              <CartHeaderBlock columnWidth="10%"></CartHeaderBlock>
              <CartHeaderBlock columnWidth="30%">
                <span>Items ({count})</span>
              </CartHeaderBlock>
              <CartHeaderBlock
                columnWidth="20%"
                style={{ textAlign: "center" }}
              >
                <span>Remove</span>
              </CartHeaderBlock>
              <CartHeaderBlock columnWidth="20%">
                <span>Quantity</span>
              </CartHeaderBlock>
              <CartHeaderBlock
                columnWidth="20%"
                style={{ textAlign: "center" }}
              >
                <span>Price</span>
              </CartHeaderBlock>
            </CartHeaderContainer>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </ItemListContainer>
          <CartSummary />
        </FlexContainer>
      </CartPageContainer>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCart,
  count: selectCartItemsCount,
});

export default connect(mapStateToProps)(Cart);
