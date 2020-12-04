import styled from "styled-components";

export const CartPageTitle = styled.div`
  color: slategrey;
  padding: 0px;
  width: 100%;
  font-size: 1.8em;
  font-weight: 100;
  margin: 0.3em 0 1.25em 0;
`;

export const CartPageContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 90vh;
  margin: 1.25em 1.8em;
  flex-direction: column;
  align-items: center;
`;

export const CartHeaderContainer = styled.div`
  width: 100%;
  padding: 1em 0 0.3em 10px;
  border-top: 0.06em solid slategrey;
  border-bottom: 0.06em solid slategrey;
  display: flex;
  height: 2.25em;
  justify-content: space-between;
`;

export const CartHeaderBlock = styled.div`
  width: ${(props) => props.columnWidth};
`;
export const FlexContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ItemListContainer = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
`;
