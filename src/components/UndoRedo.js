import React from 'react';

function UndoRedo({ dispatch }) {
  return (
    <div className="undo-redo">
      <button style={{color:"white", backgroundColor:"black", marginRight:"10px"}} onClick={() => dispatch({ type: 'UNDO' })}>Undo</button>
      <button style={{color:"white", backgroundColor:"black", marginLeft:"50px"}} onClick={() => dispatch({ type: 'REDO' })}>Redo</button>
    </div>
  );
}

export default UndoRedo;
