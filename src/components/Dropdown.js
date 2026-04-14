import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

/**
 * Generic reusable dropdown component.
 *
 * Props:
 * - options: Array of { label: string, value: any }
 * - selectedValue: current selected value
 * - onChange: function(value) called when selection changes
 * - placeholder: string to display when no value selected
 */
const Dropdown = ({ options, selectedValue, onChange, placeholder = 'Select' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const toggle = () => setOpen(prev => !prev);

  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = value => {
    onChange(value);
    setOpen(false);
  };

  const selectedLabel = options.find(o => o.value === selectedValue)?.label || placeholder;

  return (
    <div className="dropdown-root" ref={ref}>
      <button type="button" className="dropdown-button" onClick={toggle}>
        {selectedLabel}
        <span className="dropdown-icon material-symbols-outlined">expand_more</span>
      </button>
      {open && (
        <div className="dropdown-menu">
          {options.map(opt => (
            <div
              key={opt.value}
              className="dropdown-item"
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;