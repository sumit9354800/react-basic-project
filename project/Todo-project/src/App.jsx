  import Row1 from "./compontent/row1";
  import Heading from "./compontent/toto";
  import TodoItems from "./compontent/TodoItems";
  import { useState } from "react";
  import Welecome from "./compontent/welecome";

  function App(){


  const [todoItems,setTodoItems] = useState([]);

  const hendelOnItem = (items,date)=> {
        // console.log(`New Item Is ${items} and ${date}`);
        const newTodoItem = [
          ...todoItems,{name:items , date:date}
        ];
        setTodoItems(newTodoItem);
  }

  return <center className="container mt-5">
    <Heading />
    <Row1 onAddItem={hendelOnItem} />
    {todoItems.length === 0 && <Welecome />}
    <TodoItems tooItems={todoItems}  />
  </center>

  }

  export default App;