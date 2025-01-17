
import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'




function App() {
  const Items=[{
    Name:"Milk",
    Date:"10/21/2024"
  },
{
   Name:"Book",
    Date:"10/22/2024"
},
{
   Name:"Pencil",
    Date:"10/23/2024"
},
{
   Name:"Mobile",
    Date:"10/24/2024"
},
{
   Name:"Tv",
    Date:"10/25/2024"
}
]

  return (
    <>
      <center className='todo-container '>
        <AppName/>
        <AddTodo/>
        <TodoItems Items={Items}/>
      </center>
    </>
  )
}

export default App
