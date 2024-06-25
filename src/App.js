// src/App.js
import React, { useReducer } from 'react';
import Counter from './components/Counter';
import Control from './components/Control';
import ProgresBar from './components/ProgresBar';
import UndoRedo from './components/UndoRedo';
import './App.css';

const initialState = { num: 0, history: [], future: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.num < 150) {
        return {
          ...state,
          num: state.num + 1,
          history: [...state.history, state.num],
          future: []
        };
      }
      return state;
    case 'DECREMENT':
      if (state.num > 0) {
        return {
          ...state,
          num: state.num - 1,
          history: [...state.history, state.num],
          future: []
        };
      }
      return state;
    case 'UNDO':
      if (state.history.length > 0) {
        const previous = state.history.pop();
        return {
          ...state,
          num: previous,
          future: [state.num, ...state.future]
        };
      }
      return state;
    case 'REDO':
      if (state.future.length > 0) {
        const next = state.future.shift();
        return {
          ...state,
          num: next,
          history: [...state.history, state.num]
        };
      }
      return state;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Counter num={state.num} />
      <ProgresBar num={state.num} />
      <Control dispatch={dispatch} />
      <UndoRedo dispatch={dispatch} />
    </div>
  );
}

export default App;
