import style from "./container.module.css";

function Container({children}){

    return <>
         <div className={style.container}>{children}</div>
    </>

}

export default Container;

