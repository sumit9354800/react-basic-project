import { useState } from 'react'
import './App.css'
import ItemInput from './component/input'
import AddNewList from './component/addNewList';
import Welecome from './component/welcom';
import ContextItem from './store/item-store-context';


function App() {


   const [currentItem,setItem] = useState([]);

    function addItem(item,date){
      const newTodoItem = [
        ...currentItem,{name:item , date:date}
      ];
      setItem(newTodoItem);
    }

    // or pr key unique/data/value honi chahiye
    // function handleList(item,date){
    //   setItem((currValue) =>[
    //     ...currValue,{name:item , date:date}
    //   ]);
    // }

   function deleteItem(todoItem){
    // const newTodoItems = currentItem.filter((item) => item.name !== todoItem)
                    //  OR 
  // is mai jo bhi not equal hai vo sab value array se mil jayegi aur equal wali hat jayegi
    const newTodoItems = currentItem.filter(item => item.name !== todoItem)
    setItem(newTodoItems);
   }

   

  return (
    <>
      <ContextItem.Provider value={{
       currentItem,
       addItem,
       deleteItem,

      //  or

      /* items: currentItem,
       addItem:addItem,
       deleteItem:deleteItem,*/

        }}> 
      <div>
        <h1 className='text-center bg-info p-2'>Todo List</h1>
       <ItemInput/> 
       {<Welecome />}
        <AddNewList/>
       
      </div>
      </ContextItem.Provider>
    </>
  )
}

export default App;
