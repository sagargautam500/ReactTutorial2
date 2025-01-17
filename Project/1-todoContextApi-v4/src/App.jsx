
import { useRef, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import WelcomeMsg from './components/WelcomeMsg'
import ContextItems from './store/ContextItems'




function App() {
  let initialState = [{
    Name: "Milk",
    Date: "10/21/2024"
  },
  {
    Name: "Book",
    Date: "10/22/2024"
  },]

  const [listItems, setListItems] = useState(initialState)

  const text = useRef();
  const date = useRef();

  const handleAddButton = (evet) => {
    evet.preventDefault()
    if (text !== '' && date !== '') {
      let Name = text.current.value;
      let Date = date.current.value;
      text.current.value = ''
      date.current.value = ''
      let newItm = { Name, Date }
      let newAdditem = [newItm, ...listItems]
      setListItems(newAdditem)
    }
  }

  const handleDeleteButton = (item) => {
    let RemainingItem = listItems.filter((i) => i !== item)
    setListItems(RemainingItem)

  }
  return (
    <ContextItems 
      listItems={listItems}
      handleDeleteButton={handleDeleteButton}
      handleAddButton={handleAddButton}
      text={text}
      date={date}
    >
      <center className='todo-container '>
        <AppName />

        <AddTodo
        // handleAddButton={handleAddButton}
        // text={text}
        // date={date}
        />
        <WelcomeMsg />

        <TodoItems
        // Items={listItems}
        // handleDeleteButton={handleDeleteButton}
        />
      </center>
    </ContextItems>
  )
}

export default App
