import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/Counter";
import { privacyAction } from "../store/Privacy";


function Controls() {
  const dispatch = useDispatch();
  const inputNumber = useRef();


  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };
  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };
  const handleAdd = () => {
    dispatch(counterAction.add({num:inputNumber.current.value,}));
    inputNumber.current.value = "";
  };
  const handleSub = () => {
    dispatch(counterAction.subtract(inputNumber.current.value));
    inputNumber.current.value = "";
  };
  const handleReset = () => {
    dispatch(counterAction.reset());
  };
  const handlePrivacy = () => {
    dispatch(privacyAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controlButton">
        <input type="text" placeholder="Enter number" ref={inputNumber} />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          Subtract
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controlButton reset-toggle">
        <button
          type="button"
          className="btn btn-secondary "
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn btn-warning "
          onClick={handlePrivacy}
        >
          PrivacyToogle
        </button>
      </div>
    </>
  );
}

export default Controls;
