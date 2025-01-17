
import { useRef, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'




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




  // const [text, setText] = useState('')
  // const [date, setDate] = useState('')

  // const handleInputText = (e) => {
  //   setText(e.target.value)
  // }

  // const handleInputDate = (e) => {
  //   setDate(e.target.value)
  // }


  const text = useRef();
  const date = useRef();

  const handleAddButton = (evet) => {
    // console.log(evet.target[0].value)
    evet.preventDefault()
    if (text !== '' && date !== '') {
      let Name = text.current.value;
      let Date = date.current.value;
      text.current.value=''
      date.current.value=''
      let newItm = { Name, Date }
      let newAdditem = [newItm, ...listItems]
      setListItems(newAdditem)
      // setText('')
      // setDate('')
      
    }
     
  }

  const handleDeleteButton = (item) => {
    let RemainingItem = listItems.filter((i) => i !== item)
    setListItems(RemainingItem)

  }
  return (
    <>
      <center className='todo-container '>
        <AppName />

        <AddTodo
          // handleInputText={handleInputText}
          // handleInputDate={handleInputDate} 
          handleAddButton={handleAddButton}
          text={text}
          date={date}
        />


        {listItems.length == 0 && <h1>Enjoy your Day</h1>}

        <TodoItems
          Items={listItems}
          handleDeleteButton={handleDeleteButton}
        />
      </center>
    </>
  )
}

export default App
