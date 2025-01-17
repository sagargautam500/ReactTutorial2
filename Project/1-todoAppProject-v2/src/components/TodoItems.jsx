/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import TodoItem from './TodoItem'




function TodoItems({ Items }) {
  // console.log(Items.length)
  return (
    <>

      <div className="todos-items">

        {Items.map((item,inedx) => (
          <TodoItem key={inedx} todoName={item.Name} todoDate={item.Date} />
        ))}


        {/* <TodoItem todoName={"Buy Biscuit"} todoDate={"11/18/2024"} />
        <TodoItem todoName={"Buy Pen"} todoDate={"12/18/2024"} /> */}
      </div>
    </>
  )
}

export default TodoItems