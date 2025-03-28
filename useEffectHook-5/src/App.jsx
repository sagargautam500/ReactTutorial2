// useEffect Hook in React
// useEffect React Hook हो, जुन functional components भित्र side effects (API call, event listeners, subscriptions, etc.) handle गर्न प्रयोग गरिन्छ।
// यो componentDidMount, componentDidUpdate, र componentWillUnmount जस्ता lifecycle methods को काम Functional Components मा गर्न प्रयोग गरिन्छ।

// 👉 useEffect function render भएपछी चल्छ।
// 👉 यसको भित्रको callback function component mount हुँदा, update हुँदा, वा unmount हुँदा execute हुन सक्छ।



import { useState } from 'react'
import './App.css'
import AutoCounter from './types/AutoCounter4'
import Counter1 from './types/Counter1'
import Counter2 from './types/Counter2'
import Counter3 from './types/Counter3'
import WindowSize from './types/WindowSize4'

function App() {
 const [show,setShow] =useState(false)

  return (
    <>
      <h1>use effect hook practice::</h1>
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <WindowSize/> */}
      <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Stop Counter" : "Start Counter"}
      </button>
      {show && <AutoCounter />}
    </div>
    </>
  )
}

export default App
