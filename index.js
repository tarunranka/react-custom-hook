import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import useDropdown from './useDropdown';

const Genders = ['Male', 'Female'];

const [Gender, GenderComponents] = useDropdown('Gender', 'Male',Genders);

const App = () => {
  return (
    <div>
      Test
    </div>
  )
}

render(<App />, document.getElementById('root'));
