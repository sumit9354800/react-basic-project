import style from './Display.module.css'

const Display = ({displayValue})=>{

    return <>

<input className={style.input} type="text" value={displayValue}  readOnly />

    </>

}

export default Display;