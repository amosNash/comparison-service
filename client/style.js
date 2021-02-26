import styled from 'styled-components';

const Title = styled.h1`
  display: flex;
  width: 850px;
  height: 450px;
  border: 5px solid black;
`;

const CompareTable = styled.table`
  border-collapse: collapse;
`;

const PhotoTable = styled.table`
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

const TD = styled.td`
  border: 1px solid #e7e7e7;
  padding: 20px 20px 25px;
  width: 150px;
`;

const TH = styled.th`
  border: 1px solid #e7e7e7;
  padding: 20px 20px 25px;
  width: 150px;
`;

const Image = styled.td`
  text-align: center;
`;


export {
  Image,
  TD,
  TH,
  Title,
  CompareTable,
  TrOdd
};