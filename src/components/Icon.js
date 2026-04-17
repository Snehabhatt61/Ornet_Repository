import React from "react";
import PropTypes from "prop-types";

/**
 * Reusable Icon component that renders a Material Symbols icon.
 *
 * Props:
 *  - name: the icon name (string) – typically one of the values from ICONS.
 *  - size: optional size keyword ("sm", "md", "lg", "xl", "2xl").
 *  - className: additional Tailwind / custom classes.
 *  - style: optional inline style object.
 */
const sizeMap = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

const Icon = ({ name, size = "md", className = "", style = {} }) => {
  const sizeClass = sizeMap[size] || sizeMap["md"];
  return (
    <span
      className={`material-symbols-outlined ${sizeClass} ${className}`.trim()}
      style={style}
    >
      {name}
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
