import styled from "styled-components";
export const CartSummaryContainer = styled.div`
  width: 300px;
  display: flex;
  min-height: 5em;
  border: 0.7px solid lightgrey;
  flex-direction: column;
  padding: 1em 1.5em;
`;

export const CartSummaryTitle = styled.div`
  color: grey;
  padding: 0px;
  margin: 0.33em 0 1.25em 0;
`;
export const CartSummaryNumbers = styled.span`
  float: right;
`;
export const CartSummaryTotal = styled.div`
  margin: 0.33em 0 1.25em 0;
`;

export const CartSummaryDiscount = styled.div`
  margin: 0.33em 0 0.33em 0;
`;

export const CartSummaryNet = styled.div`
  padding: 1.4em 1.3em 1.4em 1.5em;
  font-weight: 600;
  color: #626d75;
  font-size: 1.25em;
  margin: 1em -1.2em -1em -1.2em;
  background-color: #efefef;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 2em;
  @media (max-width: 768px) {
    margin: 0;
    margin-top: 20px;
  }
`;

export const CartReloadButton = styled.button`
  min-width: 125px;
  width: 100%;

  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 1em;
  font-size: 0.75em;
  text-transform: uppercase;
  font-weight: bolder;

  display: flex;
  justify-content: center;
  margin-top: 1em;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
