import { useState } from 'react'
import './App.css'
import ItemInput from './component/input'
import AddNewList from './component/addNewList';
import Welecome from './component/welcom';


function App() {


   const [currentItem,setItem] = useState([]);

    function handleList(item,date){
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

   function onDelete(todoItem){
    // const newTodoItems = currentItem.filter((item) => item.name !== todoItem)
                    //  OR 
  // is mai jo bhi not equal hai vo sab value array se mil jayegi aur equal wali hat jayegi
    const newTodoItems = currentItem.filter(item => item.name !== todoItem)
    setItem(newTodoItems);
   }

   

  return (
    <>
      <div>
        <h1 className='text-center bg-info p-2'>Todo List</h1>
       <ItemInput handleList={handleList}/> 
       {currentItem == false? <Welecome />:  <AddNewList todoList={currentItem}  onDelete={onDelete} />}
       
      </div>
    </>
  )
}

export default App;
