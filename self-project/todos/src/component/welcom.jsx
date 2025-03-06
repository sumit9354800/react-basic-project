import { useContext } from "react";
import ContextItem from '../store/item-store-context'

function Welecome(){

  const contextValue = useContext(ContextItem);
  const values = contextValue.items;
    return (
        <>
      {values == 0 &&   <h1 className="text-center">Welecome Todo list</h1>}
        </>
    )

}

export default Welecome;