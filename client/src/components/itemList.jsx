import React from 'react';
import Name from './name.jsx';
import Brand from './brand.jsx';
import Price from './price.jsx';
import Photo from './photo.jsx';

const ItemList = (props) => (
  //should be a table
  //need to filter out photos, name, brand, price, number of ratings, star rating

  <table>
    <tr>
      <th></th>
    </tr>
    <br></br>
    <tr>
      <th>Name</th>
      {props.names.map(name => <Name name={name}/>)}
    </tr>
    <br></br>
    <tr>
      <th>Brand</th>
      {props.brands.map(brand => <Brand brand={brand}/>)}
    </tr>
    <br></br>
    <tr>
      <th>Price</th>
      {props.prices.map(price => <Price price={price} />)}
    </tr>
    <br></br>
    <tr>
      <th>Number of Ratings</th>
    </tr>
    <br></br>
    <tr>
      <th>Star Rating</th>
    </tr>
  </table>
);


export default ItemList;