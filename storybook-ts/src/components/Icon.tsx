import React from 'react';
import { FaCoffee } from 'react-icons/fa';

const Icon = ({ name, size }:any) => (
  <svg width={size} height={size}>
    <FaCoffee size={size} />
  </svg>
);

export default Icon;
