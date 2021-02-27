import React from 'react';
import { TD, RatingText } from '../../style.js';

const Rating = (props) => (
  <TD>
    <RatingText>{props.rating}</RatingText>
  </TD>
);

export default Rating;