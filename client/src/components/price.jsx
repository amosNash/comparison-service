import React from 'react';
import { TD, PriceText } from '../../style.js';

const Price = (props) => (
  <TD>
    From: <PriceText>${props.price}</PriceText>
  </TD>
);

export default Price;