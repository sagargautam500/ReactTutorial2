import { useReducer } from 'react'
import './App.css'

function App() {
  const initialState={count:0};

 const reducer=(state,action)=>{

// if(action.type === "decrement"){
// return state-1;
// } else if (action.type === "increment"){
//   return state+1;
// }

switch (action.type) {
  case 'increment':
    return {count:state.count + 1}
  case 'decrement':
    return {count:state.count - 1}
  case 'reset':
    return {count:0}
  default:
    return state; // Add a default case to handle unexpected actions
}
}



 const [state,dispatch] = useReducer (reducer,initialState)
//  console.log(state)
  return (
    <>
      <h1 className='text-3xl font-bold underline bg-slate-500 p-4'>useReducer tutirols in react JS</h1>
      <div className='bg-gray-400 p-4 mt-6 text-3xl '>
        <div className='mb-24  bg-blue-300  h-20  text-center content-center border-4 border-black rounded-xl '>Count :{state.count} </div>
        <button className='m-10 p-2 border-2 border-black rounded-xl bg-blue-400 hover:opacity-50'
         onClick={()=>dispatch({type:"decrement"})}
        >
          Decrement</button>
        <button className='m-10 p-2 border-2 border-black rounded-xl bg-blue-400 hover:opacity-50'
          onClick={()=>dispatch({type:"increment"})}
        >
          Increment
          </button>
        <button className='m-10 p-2 border-2 border-black rounded-xl bg-blue-400 hover:opacity-50'
          onClick={()=>dispatch({type:"reset"})}
        >
          Reset
          </button>
      </div>
     
    </>

  );
}

export default App
