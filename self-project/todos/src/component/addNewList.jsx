import AddList from "./addList";
import ContextItem from "../store/item-store-context";
import { useContext } from "react";

function AddNewList() {

    const {currentItem} = useContext(ContextItem);
    
                     // or

    // const contextValue = useContext(ContextItem);
    //  const values = contextValue.items;
    //  const onDelete = contextValue.deleteItem;
    
    console.log(currentItem)
    return (
        <>
            {currentItem.map((item) => (
                <AddList key={item.name} list={item.name} date={item.date} />
            ))}
        </>
    )

}

export default AddNewList;