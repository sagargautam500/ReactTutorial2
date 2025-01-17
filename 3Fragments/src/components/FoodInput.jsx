/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './FoodInput.module.css'
function FoodInput({handleChange,handleKeyDown,handleClickBtn}) {
  
  return (
    <div>
      <input type="text" placeholder='Enter Food items here' className={styles.foodInput} 
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      />
      
      <button type="button" className={`btn btn-info`}
      onClick={handleClickBtn}
        >
         Add
         </button>
    </div>
  )
}

export default FoodInput