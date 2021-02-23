import React from 'react';
import Item from './item.jsx';

const ItemList = (props) => {
  //should be a table
  return (
    <table>
      <tr>
        <th>Photo</th>
        <Item></Item>
      </tr>
      <br></br>
      <tr>
        <th>Name</th>
      </tr>
      <br></br>
      <tr>
        <th>Brand</th>
      </tr>
      <br></br>
      <tr>
        <th>Price</th>
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
};

export default ItemList;