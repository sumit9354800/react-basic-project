 import style from './ButtonContainer.module.css'

 const ButtonContainer = ({buttonClick})=>{
         const Button = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return (
        <div className={style.buttonContainer}>
          {Button.map((btn)=>(
            <button className={style.btn} onClick={()=> buttonClick(btn)} >{btn}</button>
          ))}
        </div>
    )

}

export default ButtonContainer;