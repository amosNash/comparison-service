import React from 'react';
import Name from './name.jsx';
import Brand from './brand.jsx';
import Price from './price.jsx';
import Photo from './photo.jsx';
import Rating from './rating.jsx';
import StarRating from './starRating.jsx';
import { CompareTable, TrOdd } from '../../style.js';

const ItemList = (props) => (
  //should be a table
  //need to filter out photos, name, brand, price, number of ratings, star rating

  <CompareTable>
    <tr>
      <th></th>
      {props.photos.map(photo => <Photo photo={photo} />)}
    </tr>
    <br></br>
    <TrOdd>
      <th>Name</th>
      {props.names.map(name => <Name name={name}/>)}
    </TrOdd>
    <br></br>
    <tr>
      <th>Brand</th>
      {props.brands.map(brand => <Brand brand={brand}/>)}
    </tr>
    <br></br>
    <TrOdd>
      <th>Price</th>
      {props.prices.map(price => <Price price={price} />)}
    </TrOdd>
    <br></br>
    <tr>
      <th>Number of Ratings</th>
      {props.ratings.map(rating => <Rating rating={rating} />)}
    </tr>
    <br></br>
    <TrOdd>
      <th>Star Rating</th>
      {props.starRatings.map(starRating => <StarRating starRating={starRating}/>)}
    </TrOdd>
  </CompareTable>
);


export default ItemList;