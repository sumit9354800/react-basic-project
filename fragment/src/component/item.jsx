import style from './Item.module.css'

function Item({food,HendalBuy}) {
  
    return <>
        <li className={`${style['kg-item']} list-group-item`}>
            <span>{food}</span>
            <button className={`${style.btn} btn btn-info`} onClick={HendalBuy}>Buy</button>
        </li>
    </>
}

export default Item;