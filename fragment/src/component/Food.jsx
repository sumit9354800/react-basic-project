import Item from "./item";

let Food = ({item}) =>{

    return (
       <ul className="list-group">
        {item.map((item)=> (
          <Item key={item} food={item} HendalBuy={()=> console.log(`buy this pro${item}`) } />
        ))}
      </ul>
    )
}

export default Food;
