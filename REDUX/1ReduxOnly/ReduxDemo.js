const redux = require('redux');

//reducer function declare::
let INITIAL_STATE = { Counter: 0 };

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === "INCREMENT") {
    return { Counter: state.Counter + 1 };
  }
  if (action.type === "DECREMENT") {
    return { Counter: state.Counter - 1 };
  }
  // Return the current state for unknown actions
  return state;
};

//create store:::
const store = redux.createStore(reducer);


//Subscribe() Method::: gain new state through callback function()
store.subscribe(() => {
  console.log('State Updated:', store.getState());
});

//Dispatch() method::: send action{}
// store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });