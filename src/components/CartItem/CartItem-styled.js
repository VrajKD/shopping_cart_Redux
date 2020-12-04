import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 3.5em;
  border-bottom: 1px solid darkgrey;
  font-size: 1.1em;
  align-items: center;
`;

export const CartImageContainer = styled.div`
  width: 10%;
  margin-right: 15px;
  padding: 0.5em 0.75em 0.5em 0;
`;

export const CartImage = styled.img`
  object-fit: contain;
`;

export const CartItemText = styled.span`
  width: 30%;
`;
export const CartItemPrice = styled.span`
  width: 20%;
  text-align: center;
`;

export const CartQuantityContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
`;

export const CartQuantityArrow = styled.div`
  cursor: pointer;
  vertical-align: middle;
`;
export const CartQuantityValue = styled.div`
  padding: 0.5em 0.75em;
  margin: 0 0.5em;
  box-shadow: 3px 3px 5px 1px #ccc;
`;

export const CartItemRemove = styled.div`
  width: 20%;
  text-align: center;
  cursor: pointer;
`;
