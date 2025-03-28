// 4️⃣ Cleanup Function in useEffect (componentWillUnmount Alternative)
//  👉 जब component remove (unmount) हुन्छ, त्यसबेला event listeners, subscriptions, intervals हटाउनु पर्छ।
// 👉 Cleanup function return () => {} भित्र राखिन्छ।

// ✅ Example: Cleanup Event Listener
import { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    console.log("add function")

    return () => {
      window.removeEventListener("resize", updateSize); // Cleanup
      console.log("clean up hook")
    };
  }, []);

  return <h2>Window Width: {width}px</h2>;
}
export default WindowSize;

// 👉 window.addEventListener() component mount हुँदा add हुन्छ।
// 👉 जब component unmount हुन्छ, window.removeEventListener() remove गरिन्छ।
// 👉 यदि cleanup function नदिएमा memory leak हुन सक्छ।
