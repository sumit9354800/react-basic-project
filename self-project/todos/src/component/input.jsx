import { useRef, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function ItemInput({ handleList }) {

    let todoItem = useRef();
    let dueDate = useRef();

    function handleClick(e) {
        e.preventDefault();
        const newItem = todoItem.current.value;
        const newDate= dueDate.current.value;
        
        handleList(newItem, newDate);
        todoItem.current.value ='';
        dueDate.current.value ='';
        // setList('');
        // setDate('');
    }


    return (
        <>
            <form className="row justify-content-center mt-5" onSubmit={handleClick}>
                <div className="col-sm-12 col-md-4 col-lg-2">
                    <div className="form-floating mb-3">
                        <input ref={todoItem} type="text" className="form-control" id="floatingInput" placeholder="Item" />
                        <label htmlFor="floatingInput">Item</label>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2">
                    <div className="form-floating mb-3">
                        <input ref={dueDate} type="date" className="form-control" id="floatingInput" placeholder="date" />
                        <label htmlFor="floatingInput">date</label>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-1">
                    <button className="btn btn-success w-100"><IoAddCircleSharp /></button>
                </div>
            </form>
        </>
    )

}

export default ItemInput;

            //  <-OR->


// import { useState } from "react";
// import { IoAddCircleSharp } from "react-icons/io5";

// function ItemInput({ handleList }) {

//     let [currentList, setList] = useState('');
//     let [currentDate, setDate] = useState('');


//     function handleItem(e) {
//         setList(e.target.value);
//         // console.log(e.target.value)
//     }

//     function handleDate(e) {
//         setDate(e.target.value);
//         // console.log(e.target.value)
//     }

//     function handleClick(e) {
//         e.preventDefault();
//         handleList(currentList, currentDate);
//         setList('');
//         setDate('');
//     }


//     return (
//         <>
//             <form className="row justify-content-center mt-5" onSubmit={handleClick}>
//                 <div className="col-sm-12 col-md-4 col-lg-2">
//                     <div className="form-floating mb-3">
//                         <input type="text" className="form-control" onChange={handleItem} value={currentList} id="floatingInput" placeholder="Item" />
//                         <label htmlFor="floatingInput">Item</label>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-4 col-lg-2">
//                     <div className="form-floating mb-3">
//                         <input type="date" className="form-control" onChange={handleDate} value={currentDate} id="floatingInput" placeholder="date" />
//                         <label htmlFor="floatingInput">date</label>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-4 col-lg-1">
//                     <button className="btn btn-success w-100"  ><IoAddCircleSharp /></button>
//                 </div>
//             </form>
//         </>
//     )

// }

// export default ItemInput;