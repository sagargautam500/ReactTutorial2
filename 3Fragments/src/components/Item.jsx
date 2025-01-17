/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Item.module.css'

function Item({foodItemss,bought,handleBtn}) {
  // let {foodItemss}=props

  
  return (
    <>
      {/* <li style={{backgroundColor:'pink'}}  className="list-group-item">{props.foodItemss}</li> */}

      <li   className={`list-group-item ${styles['sgColor']}  ${bought && 'active'}`}>
        {foodItemss}
        <button type="button" className={`btn btn-info ${styles.Btn}`}
        onClick={handleBtn}
        >
         {bought ? 'Remove':'Buy'}
         
         </button>
         
      </li>
       

      {/* <li className= {`list-group-item ${styles.sgColor} `}>{foodItemss}</li>    */}
      {/* ${styles['sgColor']} */}
      {/* ${styles['sg-color']} */}
    </>
  )
}

export default Item