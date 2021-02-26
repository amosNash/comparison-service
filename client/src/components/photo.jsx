import React from 'react';
import { Image } from '../../style.js';

const Photo = (props) => (

  <Image>
    <img src={props.photo} width="120" height="120"></img>
  </Image>

);

export default Photo;