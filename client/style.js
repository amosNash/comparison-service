import styled from 'styled-components';

const Title = styled.h1`
  display: flex;
  width: 850px;
  height: 450px;
  border: 5px solid black;
`;

const CompareTable = styled.table`
  border: 1px solid #e7e7e7;
  border-collapse: collapse;
`;

const TableData = styled.td`
  text-align: center;
`;

const TrEven = styled.tr`
`;

const TrOdd = styled.tr`
  background-color: #f2f2f2;
`;


export {
  Title,
  CompareTable,
  TrOdd
};