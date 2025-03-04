import { useState } from 'react'
import './App.css'
import Button from './component/button'
import Container from './component/container'
import Input from './component/input'

function App() {
 
   let [inputValue,set] = useState('');

     let click =(buttonText)=>{
            if(buttonText === "c"){
               set('');
            }else if (buttonText === "="){
                let  result = eval(inputValue);
                  set(result);
            }else{
              let elseValue = inputValue + buttonText;
              set(elseValue);
            }
      }

  return (
    <>
    <Container>
         <Input display={inputValue}></Input>
         <Button onclick={click}></Button>
    </Container>
    </>
  )
}

export default App
