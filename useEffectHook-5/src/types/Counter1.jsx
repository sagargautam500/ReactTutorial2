// Types of useEffect Based on Dependencies
// 1️⃣ Without Dependency Array (Runs on Every Render)
// 👉 यदि useEffect मा dependency array छैन भने, हरेक पटक component render हुँदा यो function चल्छ।

// ✅ Example: Runs on Every Render
import React, { useEffect, useState } from "react";

export default function Counter1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called on every render");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 👉 हरेक पटक button click हुँदा component re-render हुन्छ र useEffect फेरि चल्छ।
// 👉 यो राम्रो अभ्यास होइन, किनभने useEffect बारम्बार चल्दा performance issue आउन सक्छ।
