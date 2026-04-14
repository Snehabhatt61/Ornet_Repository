import React from 'react';
import './IconButton.css';
import Button from './Button';

/**
 * IconButton wraps Button and renders a material symbol.
 *
 * Props:
 * - icon: string (material symbol name)
 * - size: 'sm' | 'md' | 'lg'
 * - onClick
 * - variant: 'primary' | 'secondary' | 'outline' | 'text'
 * - className
 */
const IconButton = ({
  icon,
  size = 'md',
  onClick,
  variant = 'primary',
  className = '',
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={`icon-button-root ${className}`}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </Button>
  );
};

export default IconButton;