import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  // const counterVal=useSelector((state)=>state.counter.counterVal)
  const { counterVal } = useSelector((state) => state.counter);
  return (
    <>
      <p className="lead mb-4 displayValue">Counter current Value:{counterVal}</p>
    </>
  );
}

export default DisplayCounter;
