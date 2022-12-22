import React from 'react';

const Button = ({ text, onClick }:any) => (
  <button onClick={onClick}>{text}</button>
);

export default Button;
