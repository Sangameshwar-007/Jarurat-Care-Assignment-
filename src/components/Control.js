// src/components/Controls.js
import React from 'react';

function Control({ dispatch }) {
  return (
    <div className="controls">
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add 1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Subtract 1</button>
    </div>
  );
}

export default Control;
