import { useReducer, useState } from "react";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'change_value_to_add'
const ADD_VALUE_TO_COUNT = 'add_value_to_count'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    default:
      throw new Error('unexpected action type: ' + action.type);
    // return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0
  });

  console.log(state);


  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  }
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    })
  }
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    })
  }


  return (
    <div >
      <h1>Count is  {state.count} </h1>
      <div>
        <button onClick={increment} >increment</button>
        <button onClick={decrement} >decrement</button>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input value={state.valueToAdd || ""} onChange={handleChange} type="number" />
        <button>Add it !</button>
      </form>
    </div>
  );
}

export default App;
