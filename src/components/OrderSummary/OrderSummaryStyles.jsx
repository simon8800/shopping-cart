import styled from "styled-components";

const OrderSummaryContainer = styled.div`
  background-color: rgb(244, 244, 244);
  padding: 20px;
`;

const OrderSummaryTable = styled.table`
  width: 311px;
  height: 260px;
  border-collapse: collapse;

  & tr:first-child {
    border-bottom: 1px solid #dadada;
  }

  & tr:last-child {
    border-top: 1px solid #dadada;
  }

  & th {
    font-weight: 400;
  }

  & th h4 {
    margin: 0;
  }

  & td h4 {
    margin: 0;
  }

  & th {
    text-align: left;
  }

  & td {
    text-align: right;
  }
`;

export { OrderSummaryContainer, OrderSummaryTable };
