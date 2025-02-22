import { createStore } from "redux";

const INITIAL_VALUE = { counter: 0, privacy: false };

const counterReducer = (store = INITIAL_VALUE, action) => {  //store means current state
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 }//...store sprit operator
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 }
  } else if (action.type === "RESET") {
    return { ...store, counter: 0 }
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) }
  } else if (action.type === "SUB") {
    return { ...store, counter: store.counter - action.payload.num }
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy }
  }
  return store;
}

const counterStore = createStore(counterReducer);
export default counterStore;