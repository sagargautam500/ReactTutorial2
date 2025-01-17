/* eslint-disable no-unused-vars */
import React from 'react'

function TodoItem1() {
  let todoName="Buy Milk"
  let todoDate="10/17/2024"
  return (
    <div>
       <div className="row mar-bottom" >
          <div className="col-6 ">
           {todoName}
          </div>
          <div className="col-4 ">
            {todoDate}
          </div>
          <div className="col-2 ">
            <button type="button" className="btn btn-danger kg-btn">Delete</button>
          </div>
        </div>
    </div>
  )
}

export default TodoItem1