
import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import ErrorMsg from './components/ErrorMsg'
import FoodInput from './components/FoodInput'
import FoodItems from './components/FoodItems'
function App() {
  // let foodItems=[]
  // let foodItems = ["dal", "Bhat", "Roti", "Salad", "Milk"]

  const [textShow, setTextShow] = useState()

  const [foodItems, setFoodItems] = useState([])

  const handleChange = (event) => {
    // console.log(event.target.value)
    var textShowValue = event.target.value
    setTextShow(textShowValue)
  }

  const keyDown = (e) => {
    if (e.key == "Enter") {
      let newFoodItem = e.target.value
      e.target.value = ''
      if (newFoodItem) {
        let newItem = [newFoodItem, ...foodItems]     
        setFoodItems(newItem)
      }

    }
    // console.log(e)
  }


  const clickBtn = () => {
    if (textShow !== '') {
      let newItem1 = [textShow, ...foodItems];
      setFoodItems(newItem1);
      setTextShow('');  // Clear the input after adding
    }
  }



  return (
    <>
      <Container>
        <h1 className='sg-heading'>Healthy Foods:</h1>
        <FoodInput handleChange={handleChange} handleKeyDown={keyDown} handleClickBtn={clickBtn} />
        <ErrorMsg sgItem={foodItems} />

        <p style={{ backgroundColor: "gray", padding: 4, marginTop: 20 }}>Item:{textShow}</p>

        <FoodItems sgItem={foodItems} />
      </Container>

      <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam et id. Voluptates molestiae facilis, ipsam aut ratione impedit iure architecto, illo, tempore soluta saepe animi laborum eum magni fuga.</p>
      </Container>

    </>
  )
}

export default App
