import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { TD } from '../../style.js';

const StarRating = (props) => (
  <TD>
    <StarRatingComponent
      name="itemRating"
      starCount={5}
      value={props.starRating}
      starColor="#FFA500"
    />
  </TD>
);

export default StarRating;