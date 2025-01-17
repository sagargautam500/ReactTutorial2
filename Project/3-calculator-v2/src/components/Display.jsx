/* eslint-disable react/prop-types */
// import React from 'react'
import styles from './Display.module.css'
function Display({displayValue}) {
  return (
    <div>
            <input className={styles.display} type="text" value={displayValue} readOnly />  
    </div>
  )
}

export default Display