
import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'

function App() {

  return (
    <>
      <center className='todo-container '>
        <AppName/>
        <AddTodo/>

        <div className="todos-items">
        <TodoItem1/>
        <TodoItem2/>
        </div>
      
      </center>
    </>
  )
}

export default App
