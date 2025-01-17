/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Container.module.css'

// function Container(props) 
function Container({children}) 
{
  return (
    <div className={styles.container}>
    {/* {props.children} */}
    {children}
    </div>
  )
}

export default Container