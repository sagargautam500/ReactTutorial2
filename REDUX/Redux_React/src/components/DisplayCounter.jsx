import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  const counter=useSelector((state)=>state.counter)
  return (
    <>
      <p className="lead mb-4">
        Counter current Value:{counter}
      </p>
    </>
  );
}

export default DisplayCounter;
