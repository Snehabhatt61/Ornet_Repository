import React from 'react';
import './InputGroup.css';

/**
 * InputGroup component for input + button combos.
 *
 * Props:
 * - value
 * - onChange
 * - placeholder
 * - buttonText
 * - onButtonClick
 */
const InputGroup = ({
  value,
  onChange,
  placeholder,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="input-group-root">
      <input
        className="input-group-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button
        className="input-group-button"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default InputGroup;