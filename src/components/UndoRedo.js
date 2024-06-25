// src/components/UndoRedo.js
import React from 'react';

function UndoRedo({ dispatch }) {
  return (
    <div className="undo-redo">
      <button onClick={() => dispatch({ type: 'UNDO' })}>Undo</button>
      <button onClick={() => dispatch({ type: 'REDO' })}>Redo</button>
    </div>
  );
}

export default UndoRedo;
