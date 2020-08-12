import React, { useState, useRef } from 'react'

import useBodyClick from '../shred/useBodyClick'

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef()

  const showSelectedItem = window.location.pathname === "/dropdown";

  useBodyClick(dropdownRef, setOpen, false);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  const selectedColor = {
    color: "#fff",
    textShadow: "#000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px",
  };

  const selectedBackgroundColor = { backgroundColor: selected.value };

  return (
    <div ref={dropdownRef} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open && "visible active"}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open && "visible transition"}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      {showSelectedItem && (
        <div className={`ui segment`} style={selectedBackgroundColor}>
          <p className="ui header" style={selectedColor}>
            You have selected {selected.value}!
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown
