import './App.css'
import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
  const Button=['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','%','.','=']

  return (
    <>
      <div className={styles.calculator}>
       <Display/>
       <ButtonContainer Button={Button}/>
      </div>
    </>
  )
}

export default App
