import { useState } from 'react'
import './App.css'
import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
  const Button=['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','%','.','=']

  const [calVal,setCalVal] = useState('');

  const handleBtn=(btn)=>{
   if(btn=='C'){
      setCalVal('')
   }else if(btn=='='){
       let result=eval(calVal)
       setCalVal(result)
   }else{
    let newValue=calVal+btn
    setCalVal(newValue)
   }
    
  }
  

  return (
    <>
      <div className={styles.calculator}>
       <Display displayValue={calVal}  />
       <ButtonContainer
        Button={Button}
        handleBtn={handleBtn}
       
       />
      </div>
    </>
  )
}

export default App
