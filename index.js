import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import useDropdown from './useDropdown';

const App = () => {
  const Genders = ['Male', 'Female'];
  const [Gender, GenderComponents] = useDropdown('Gender', 'Male',Genders);
  return (
    <div>
      <GenderComponents />
    </div>
  )
}

render(<App />, document.getElementById('root'));
