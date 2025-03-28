// 3️⃣ With Dependency Array (Runs When Dependency Changes)
// 👉 यदि useEffect मा dependency array राखियो भने, त्यो dependency change हुँदा मात्र useEffect execute हुन्छ।
// 👉 यो componentDidUpdate() जस्तै हो।

// ✅ Example: Runs When count Changes
import { useState, useEffect } from "react";

function Counter3() {
  const [count, setCount] = useState(0);
  console.log("component render");

  useEffect(() => {
    console.log(`useEffect ran - Count changed to ${count}`);
  }, [count]); // Runs only when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter3;
// 👉 useEffect() तब मात्र चल्छ जब count state update हुन्छ।
// 👉 useEffect अन्य state वा props change हुँदा चाहिँ execute हुँदैन।