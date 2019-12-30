import React from "react";
import "./SearchField.css";
function SearchField(props) {
  const { inputValue, searchChange } = props
  return (
    <div className="sf_container">
      <input
        className="sf_input"
        type="text"
        placeholder="Search artist"
        value={inputValue}
        onChange={searchChange}
      />
      <i className="material-icons sf_icon">search</i>
    </div>
  );
}

export default SearchField;
