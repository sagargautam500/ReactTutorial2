
function CurrentTime() {
  let time=new Date();
  return (
    <div>This is the Current Time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</div>
  )
}

export default CurrentTime