import React from 'react';
import { TD, NameText } from '../../style.js';

const Name = (props) => (
  <TD>
    <NameText>{props.name}</NameText>
  </TD>
);

export default Name;