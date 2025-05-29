import { createContext } from "react";
import { useReducer } from 'react'

export const ContextItem = createContext(
    {
        currentItem: [],
        addItem: () => { },
        deleteItem: () => { },
    }
);

const reducer = (currentState, action) => {

    let newTodoItem = currentState;

    if (action.type == "ADD_ITEM") {
        newTodoItem = [
            ...currentState, { name: action.payload.item, date: action.payload.date }
        ];

    } else if (action.type == "DELETE_ITEM") {
        newTodoItem = currentState.filter(item => item.name !== action.payload.todoItem)
    }
    return newTodoItem;
}


const ContextItemProvider = ({ children }) => {

    const [currentItem, dispatchItem] = useReducer(reducer, []);

    function addItem(item, date) {

        const AddStateItem = {
            type: "ADD_ITEM",
            payload: {
                item,
                date,
            }
        }
        dispatchItem(AddStateItem);
        localStorage.setItem(item,date);

    }


    function deleteItem(todoItem) {
        const deleteStateItem = {
            type: "DELETE_ITEM",
            payload: {
                todoItem,
            }
        }
        dispatchItem(deleteStateItem)

    }
   
    return <ContextItem.Provider value={{
        currentItem,
        addItem,
        deleteItem,

        //  or

        /* items: currentItem,
         addItem:addItem,
         deleteItem:deleteItem,*/

    }}>

        {children}

    </ContextItem.Provider>

}

export { ContextItemProvider };

export default ContextItem;