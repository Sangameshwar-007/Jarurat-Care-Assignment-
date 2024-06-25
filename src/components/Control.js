
import React from 'react';

function Control({ dispatch }) {
  return (
    <div className="controls">
      <button style={{color:"white", backgroundColor:"green",}} onClick={() => dispatch({ type: 'INCREMENT' })}>Add 1</button>
      <button style={{color:"white", backgroundColor:"red"}} onClick={() => dispatch({ type: 'DECREMENT' })}>Subtract -1</button>
    </div>
  );
}

export default Control;
