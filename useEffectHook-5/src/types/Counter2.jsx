// 2️⃣ With Empty Dependency Array (Runs Only Once, like componentDidMount)
// 👉 यदि dependency array [] खाली राखियो भने, useEffect केवल एक पटक चल्छ (जब component mount हुन्छ)।
// 👉 यो componentDidMount() को जस्तै हो।

// ✅ Example: Runs Only Once

import React, { useEffect, useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect ran only once - Component Mounted");
    // Cleanup function (optional)
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter2;

// 👉 यो component first time mount हुँदा मात्र चल्छ।
// 👉 यदि cleanup function दिएर return गरियो भने, component unmount हुँदा cleanup function execute हुन्छ।
