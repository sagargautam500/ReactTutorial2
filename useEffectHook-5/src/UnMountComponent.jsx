// 2️⃣ What is Component Unmounting?
// 👉 When a component disappears from the screen, it is called unmounting.
// 👉 This happens when a component is removed from the DOM.
// 👉 Example: Navigating to another page, conditionally hiding a component, etc.

// How does React Handle Unmounting?
// In Class Components, componentWillUnmount() runs before the component is removed.
// In Functional Components, we use the cleanup function inside useEffect.

// ✅ Example: Component Unmounting with Cleanup
import { useState, useEffect } from "react";

function Timer() {
  useEffect(() => {
    console.log("Timer Component Mounted!");

    return () => {
      console.log("Timer Component Unmounted!");
    };
  }, []);

  return <h2>Timer is running...</h2>;
}
//anothe app file only:
function App1() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Stop Timer" : "Start Timer"}
      </button>
      {/* {show && <Timer />} */}
      {show && Timer() }
    </div>
  );
}

// export default App1;
// How This Works?
// When show is true, Timer component mounts (Component Mounted! is logged).

// When show is false, Timer component unmounts (Component Unmounted! is logged).

// The cleanup function inside useEffect() runs before the component disappears.

// Why is Unmounting Important?
// ✅ To clear timers, intervals, or event listeners when a component is removed.
// ✅ To prevent memory leaks in applications.
// ✅ To unsubscribe from API calls or WebSocket connections when they are no longer needed.

// Conclusion
// Lifecycle	     When it Happens?	       Class Component Method	         Functional Component Hook
// Mounting	     Component appears in DOM	    componentDidMount()	           useEffect(() => {}, [])
// Unmounting    Component is removed	         componentWillUnmount()	       useEffect(() => { return () => {...} }, [])