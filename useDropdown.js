import React,{useState} from 'react';

const useDropdown = (label, defaultState, options) => {
  const [state, updatestate] = useState;
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () =>(
    <label htmlFor={id}>
      <select id={id} 
        value={state}
        onChange = {e => updatestate(e.target.value)}
        onBlur = {e => updatestate(e.target.value)}
        disabled = {!options.length}
      >
      {options.map((option)=>{
        <option key={option} value={option}>{option}</option>
      })}
      </select>
    </label>
  );
  return [state, Dropdown]
}

export default useDropdown;
