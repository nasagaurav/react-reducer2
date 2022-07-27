import React, { useReducer } from 'react';
const intialState = {
  x: 0,
  y: 0,
  z: 0,
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case '+x':
      return { ...state, x: state.x + 1 };
    case '+y':
      return { ...state, y: state.y + 1 };
    case '+z':
      return { ...state, z: state.z + 1 };
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const p1 = () => {
    dispatch({ type: '+x' });
  };
  const p2 = () => {
    dispatch({ type: '+y' });
  };
  const p3 = () => {
    dispatch({ type: '+z' });
  };

  return (
    <div>
      <h1>usereducer example2</h1>
      <button onClick={p1}>+x</button>
      <button onClick={p2}>+y</button>
      <button onClick={p3}>+z</button>
      <h2>x: {state.x}</h2>
      <h2>y: {state.y}</h2>
      <h2>z: {state.z}</h2>
    </div>
  );
}
