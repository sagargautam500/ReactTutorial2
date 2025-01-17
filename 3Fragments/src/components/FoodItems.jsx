/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Item from './Item'

function FoodItems({ sgItem }) {
  // let foodItems=[]
  // let foodItems = ["dal", "Bhat", "Roti", "Salad", "Milk"]
const[activeItems,setActiveItems]=useState([]);

const onBuyButton=(e,item)=>{
  if (!activeItems.includes(item)) {
    setActiveItems([...activeItems, item]);
  }
  else{
     // If the item is already active, remove it
     setActiveItems(activeItems.filter(i => i !== item));
  }
}

  return (
    <>
      {/* <ul className="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">Bhat</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li>
      </ul> */}

      <ul className="list-group" >

        {sgItem.map((item, idx) => (
          <Item key={idx} 
          foodItemss={item}

          handleBtn={(e)=>{
            console.log(`${item} was bought` )
             onBuyButton(e,item)
                      }}
          bought={activeItems.includes(item)}
          />
          
        ))}
      </ul>
    </>
  )
}

export default FoodItems