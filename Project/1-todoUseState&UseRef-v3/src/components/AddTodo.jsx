/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ handleInputText, handleInputDate, handleAddButton, text, date }) {



  return (
    <>
      <form onSubmit={handleAddButton}>
        <div className="row mar-top mar-bottom">
          <div className="col-6  ">
            <input
              ref={text}
              type="text"
              placeholder='Enter todo here'
              // value={text}
              // onChange={handleInputText}
            />
          </div>
          <div className="col-4 ">
            <input
            ref={date}
              type="date"
              // value={date}
              // onChange={handleInputDate} 
              />
          </div>
          <div className="col-2 ">
            <button className="btn btn-success kg-btn ">
              <IoMdAddCircle />
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddTodo