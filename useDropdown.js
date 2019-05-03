import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  console.log(state);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () =>(
    <label htmlFor={id}>
      <select id={id} 
        value={state}
        onChange = {e => updateState(e.target.value)}
        onBlur = {e => updateState(e.target.value)}
        disabled = {!options.length}
      >     
      {options.map((option)=>(
        <option key={option} value={option}>{option}</option>
      ))}
      </select>
    </label>
  );
  return [state, Dropdown]
}

export default useDropdown;
