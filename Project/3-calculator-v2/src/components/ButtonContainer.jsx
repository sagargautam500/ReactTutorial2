/* eslint-disable react/prop-types */
// import React from 'react'
import styles from './ButtonContainer.module.css'
function ButtonContainer({Button,handleBtn}) {
  // const Button=[0,1,2,3,4,5,6,7,8,9]
  
  
  return (
    <>
       <div className={styles.buttonsContainer}>

            {
              Button.map((btn,idx)=>(

                <button 
                key={idx}
                 className={styles.buttons}
                 onClick={()=>(handleBtn(btn))}
                >
                  {btn}
                </button>

              ))
            }
        </div>
    </>
  )
}

export default ButtonContainer