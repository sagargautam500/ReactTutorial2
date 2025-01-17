/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { MdDeleteForever } from "react-icons/md";

function TodoItem({todoName,todoDate,handleDeleteButton}) {
  // let todoName="Buy Milk"
  // let todoDate="10/17/2024"
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
            <button type="button" className="btn btn-danger kg-btn"
            onClick={handleDeleteButton}
            ><MdDeleteForever /></button>
          </div>
        </div>
    </div>
  )
}

export default TodoItem