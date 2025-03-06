import './App.css'
import ItemInput from './component/input'
import AddNewList from './component/addNewList';
import Welecome from './component/welcom';
import { ContextItemProvider } from './store/item-store-context';




function App() {

  return (
    <>
      <ContextItemProvider>
        <div>
          <h1 className='text-center bg-info p-2'>Todo List</h1>
          <ItemInput />
          {<Welecome />}
          <AddNewList />
        </div>
      </ContextItemProvider>
    </>
  )
}

export default App;
