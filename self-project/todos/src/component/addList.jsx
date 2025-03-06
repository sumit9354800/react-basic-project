import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import ContextItem from "../store/item-store-context";

function AddList({ list, date }) {

    const {deleteItem} = useContext(ContextItem)

    return (
        <>
            <div className="row justify-content-center mt-1">
                <div className="col-sm-12 col-md-4 col-lg-2">
                    <p>{list}</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2">
                    <p>{date}</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-1">
                    <button className="btn btn-danger w-100" onClick={()=> deleteItem(list)}><MdDelete /></button>
                </div>
            </div>
        </>
    )

}

export default AddList;