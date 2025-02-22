import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();
  const inputNumber = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputNumber.current.value } });
    inputNumber.current.value = "";
  };
  const handleSub = () => {
    dispatch({ type: "SUB", payload: { num: inputNumber.current.value } });
    inputNumber.current.value = "";
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
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
        <input type="text" placeholder="enter number" ref={inputNumber} />
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
