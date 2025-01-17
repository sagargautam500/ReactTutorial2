/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import FoodItems from './FoodItems'

function ErrorMsg({sgItem}) {
  // let foodItems=[]
  // let foodItems = ["dal", "Bhat", "Roti", "Salad", "Milk"]

  // if(foodItems.length===0){
  //   return <h3>I am still hungry</h3>
  // }


  // let empMsg= foodItems.length===0 ? <h3>I am still hungry</h3> :null;

  return (
    <>
           {/* {
        foodItems.length===0 ? <h3>I am still hungry</h3> :null
      } */}

            {/* {empMsg} */}

           { sgItem.length===0 && <h3>I am still hungry</h3>}
    </>
  )
}

export default ErrorMsg