// src/components/Button.js
import React from 'react';
import '../styles/button.scss';

const Button = ({ children, onClick, variant = 'primary', size = 'medium' }) => {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
