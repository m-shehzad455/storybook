import React from 'react';
 
const Input = ({ type = 'text', label, onChange, value, placeholder, required }:any) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
