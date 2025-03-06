import { createContext } from "react";

const ContextItem = createContext(
    {
        currentItem:[],
        addItem: ()=>{},
        deleteItem: ()=>{},
    } 
);

export default ContextItem;