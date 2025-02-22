import React from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
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
        <button type="button" className="btn btn-info" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Controls;
