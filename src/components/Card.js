import React from 'react';
import './Card.css';

/**
 * Reusable Card component.
 *
 * Props:
 * - image: string (URL)
 * - title: string
 * - price: string | number
 * - badge: ReactNode (optional)
 * - onClick: function
 * - children: ReactNode (optional)
 */
const Card = ({
  image,
  title,
  price,
  badge,
  onClick,
  children,
}) => {
  return (
    <div className="card-root" onClick={onClick}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      {badge && <div className="card-badge">{badge}</div>}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;