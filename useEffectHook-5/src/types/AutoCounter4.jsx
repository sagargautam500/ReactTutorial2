// ✅ Example: Auto Counter with Cleanup (setInterval Cleanup)
// 👉 यस उदाहरणमा, एक auto-increment counter छ, जसले हर 1 second मा count बढाउँछ।
// 👉 जब component unmount हुन्छ, clearInterval() प्रयोग गरेर interval हटाइन्छ।
import { useState, useEffect } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect Started");
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Every 1 sec

    return () => {
      console.log("Effect Cleanup - Interval Cleared");
      clearInterval(interval); // Cleanup interval when component unmounts
    };
  }, []);

  return (
    <div>
      <h2>Auto Counter: {count}</h2>
    </div>
  );
}

export default AutoCounter;
// How It Works?
// जब component mount हुन्छ, setInterval() start हुन्छ र हर 1 second मा count बढ्छ।
// जब component unmount हुन्छ, clearInterval(interval) call हुन्छ, जसले interval रोक्छ।
// यदि clearInterval() नहटाइएमा, memory leak हुन सक्छ।