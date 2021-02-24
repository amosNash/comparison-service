import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const StarRating = (props) => (
  <td>
    <StarRatingComponent
      name="itemRating"
      starCount={5}
      value={props.starRating}
      starColor="#FFA500"
    />
  </td>
);

export default StarRating;