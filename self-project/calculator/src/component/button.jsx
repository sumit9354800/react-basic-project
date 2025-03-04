import style from "./button.module.css";

function Button ({onclick}){
let btn = ["c","1","2","+","3","4","-","5","6","*","7","8","/","9","0",".","="];

return(
<div className={`${style.container}`}>
{btn.map((b)=>(
    <button 
   onClick={()=>{ onclick(b) }}
    className={`${style.btn}`}
    >
        {b}</button>
))}
</div>
)

}

export default Button;