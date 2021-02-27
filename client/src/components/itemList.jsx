import React from 'react';
import Name from './name.jsx';
import Brand from './brand.jsx';
import Price from './price.jsx';
import Photo from './photo.jsx';
import Rating from './rating.jsx';
import StarRating from './starRating.jsx';
import { CompareTable, TrOdd, TH} from '../../style.js';

const ItemList = (props) => (
  //should be a table
  //need to filter out photos, name, brand, price, number of ratings, star rating

  <CompareTable>
    <tr>
      <th></th>
      {props.photos.map(photo => <Photo photo={photo} />)}
    </tr>
    <TrOdd>
      <TH>Name</TH>
      {props.names.map(name => <Name name={name}/>)}
    </TrOdd>
    <tr>
      <TH>Brand</TH>
      {props.brands.map(brand => <Brand brand={brand}/>)}
    </tr>
    <TrOdd>
      <TH>Price</TH>
      {props.prices.map(price => <Price price={price} />)}
    </TrOdd>
    <tr>
      <TH>Number of Ratings</TH>
      {props.ratings.map(rating => <Rating rating={rating} />)}
    </tr>
    <TrOdd>
      <TH>Star Rating</TH>
      {props.starRatings.map(starRating => <StarRating starRating={starRating}/>)}
    </TrOdd>
  </CompareTable>
);


export default ItemList;