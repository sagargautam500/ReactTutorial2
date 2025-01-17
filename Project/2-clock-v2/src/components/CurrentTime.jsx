import { useEffect } from "react"
import { useState } from "react"

function CurrentTime() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
  const Timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return ()=>{
      clearInterval(Timer)
    }
  }, [])

  return (
    <div>This is the Current Time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</div>
  )
}

export default CurrentTime