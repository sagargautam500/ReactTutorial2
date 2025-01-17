/* eslint-disable no-unused-vars */
import React from 'react'

function AddTodo() {
  return (
    <div><div className="row mar-top mar-bottom">
    <div className="col-6  ">
      <input type="text" placeholder='Enter todo here' />
    </div>
    <div className="col-4 ">
      <input type="date" />
    </div>
    <div className="col-2 ">
      <button type="button" className="btn btn-success kg-btn">Add</button>
    </div>
  </div></div>
  )
}

export default AddTodo