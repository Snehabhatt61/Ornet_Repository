import React from 'react';
import './Button.css';

/**
 * Reusable button component.
 *
 * Props:
 * - variant: 'primary' | 'secondary' | 'outline' | 'text'
 * - size: 'sm' | 'md' | 'lg'
 * - onClick
 * - type
 * - className
 * - children
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  children,
}) => {
  const variantClass = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    outline: 'button-outline',
    text: 'button-text',
  }[variant];

  const sizeClass = {
    sm: 'button-sm',
    md: 'button-md',
    lg: 'button-lg',
  }[size];

  return (
    <button
      type={type}
      className={`button-root ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;