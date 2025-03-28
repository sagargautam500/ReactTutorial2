// Component Mount / Unmount in React (Easy Explanation)
// In React, a component goes through different phases in its lifecycle. Two important phases are:

// Mounting → When a component is created and added (rendered) to the DOM.
// Unmounting → When a component is removed from the DOM.

// 1️⃣ What is Component Mounting?
// 👉 When a component appears on the screen for the first time, it is called mounting.
// 👉 This happens when the component is created and added to the DOM.
// 👉 Example: When a page loads or when a component is conditionally displayed.

// How does React Handle Mounting?
// In Class Components, componentDidMount() runs after the component is mounted.
// In Functional Components, we use useEffect(() => {}, []) to run code only once when mounted.

// ✅ Example: Component Mounting
import { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    console.log("Component Mounted!");
  }, []); // Runs only once when the component appears

  return <h2>Welcome to React!</h2>;
}

export default Welcome;
// 👉 When the Welcome component appears on the screen, "Component Mounted!" is logged.
// 👉 The empty [] dependency array ensures this runs only once.