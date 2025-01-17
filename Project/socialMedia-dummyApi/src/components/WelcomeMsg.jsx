/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function WelcomeMsg({handleOnClick}) {
  return (
    <center style={{margin:"200px 0"}}>
       <h1>There are no Posts available</h1>
       <button
        style={{borderRadius:"4px",backgroundColor:'blue'}}
        onClick={handleOnClick}
        >
          Get more post from server
          </button>
    </center>
  )
}

export default WelcomeMsg;