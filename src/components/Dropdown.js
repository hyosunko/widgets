import React, { useState, useRef } from 'react'

import useBodyClick from '../shared/useBodyClick'

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef()

  const showSelectedItem = window.location.pathname === "/dropdown";

  useBodyClick(dropdownRef, setOpen, false);

  const renderedOptions = options.map((option, i) => {
    if (option.value === selected.value) {
      return null
    }

    return (
      <div
        key={i}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  const handleBoxClick = e => {
    const selectedOption = options.find(
      (obj) => obj.value === e.target.innerText
    );

    if(selectedOption) {
      onSelectedChange(selectedOption);
      setOpen(false);
    }
  }

  const textOutline =
    "#000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px";

  const selectedColor = { color: "#fff", textShadow: textOutline };

  const boxColor = (option) => {
    let border = {}
    const cssList = {
      backgroundColor: option.value,
      color: "#fff",
      fontSize: "0.8rem",
      textShadow: textOutline,
      textAlign: "center",
      wordWrap: "break-word",
    };

    if( option.value === selected?.value ) {
      border = { border: "5px red solid"}
    }

    return { ...border, ...cssList };
  }
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
        <div className="ui container">
          <div className={`ui segment`} style={selectedBackgroundColor}>
            <p className="ui header" style={selectedColor}>
              You have selected {selected.value}!
            </p>
          </div>
          <div>
            Available Colors
            <hr />
            <div className="ui celled grid">
              {options.map((option) => {
                return (
                  <div
                    key={option.value}
                    className="one wide column"
                    onClick={handleBoxClick}
                    style={boxColor(option)}
                  >
                    {option.value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown
