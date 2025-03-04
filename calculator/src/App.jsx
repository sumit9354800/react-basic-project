import Display from './component/Display.jsx'
import style from './App.module.css'
import ButtonContainer from './component/ButtonContainer.jsx'
import { useState } from 'react'

function App() {

  let [disVal,curVal] = useState('');
  let click = (buttonText)=> {
          if(buttonText === 'C'){
             curVal('');
          }

          else if(buttonText === '='){
            let result = eval(disVal);
            curVal(result);
          }
           
          else{
          const  newDisplayValue = disVal + buttonText;
            curVal(newDisplayValue);
          }
  }

  return (
    <>
      <div className={style.calculator}>
        <Display displayValue={disVal} />
        <ButtonContainer buttonClick={click} />
      </div>
    </>
  )
}

export default App
