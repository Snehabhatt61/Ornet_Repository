import React from 'react';
import './Badge.css';

/**
 * Badge component for status labels.
 *
 * Props:
 * - variant: 'primary' | 'secondary' | 'success' | 'warning'
 * - children
 */
const Badge = ({ variant = 'primary', children }) => {
  const variantClass = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
  }[variant];

  return <span className={`badge-root ${variantClass}`}>{children}</span>;
};

export default Badge;