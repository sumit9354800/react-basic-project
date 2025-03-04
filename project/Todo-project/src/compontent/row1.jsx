    import { useState } from "react";

    function Row1({onAddItem}){

    const [itemName,setItem] = useState();
    const [dueDate,setDate] = useState();

    const hendalName = (event)=>{
    setItem(event.target.value);
    }
    const hendelDate = (event)=>{
    setDate(event.target.value);
    }
    const hendulButton = ()=>{
    onAddItem(itemName , dueDate);
    setItem('');
    setDate('');
    }

    return <div className="row justify-content-center mt-5">
    <div className="col-sm-12 col-md-3 col-lg-2 mt-3">
        <input className="w-100" type="text" placeholder="Enter Todo here" value={itemName} onChange={hendalName} />
    </div>
    <div className="col-sm-12 col-md-2 col-lg-2 mt-3">
        <input className="w-100" type="date" name="" id="float-l" value={dueDate} onChange={hendelDate} />
    </div>
    <div className="col-sm-12 col-md-2 col-lg-1 mt-3">
        <button  className="btn btn-success w-100" onClick={hendulButton}>Add</button>
    </div>
    </div>
    }

    export default Row1;