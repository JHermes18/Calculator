import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    const value = e.target.value;
    if (isNumeric(value)) {
      setNum1(value);
    }
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    if (isNumeric(value)) {
      setNum2(value);
    }
  };

  const handleAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  const isNumeric = (value) => {
    return /^-?\d*(\.\d+)?$/.test(value);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="input-container">
        <input className='input' type="text" value={num1} onChange={handleNum1Change} placeholder="Enter number 1" />
        <input className='input' type="text" value={num2} onChange={handleNum2Change} placeholder="Enter number 2" />
      </div>
      <div className="button-container">
        <button className="button add" onClick={handleAdd}>+</button>
        <button className="button subtract" onClick={handleSubtract}>-</button>
        <button className="button multiply" onClick={handleMultiply}>*</button>
        <button className="button divide" onClick={handleDivide}>/</button>
      </div>
      <h2 className='result'>Result: {result}</h2>
    </div>
  );
}

export default App;